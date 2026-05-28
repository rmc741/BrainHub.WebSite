import { createContext, useContext, useState, type ReactNode } from 'react'
import { authService } from '../services/authService'
import type { AuthResponse, AuthUser, LoginCredentials, RegisterCredentials } from '../types/Auth'

const AUTH_STORAGE_KEY = 'brainhub.auth'

interface AuthContextValue {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const isTokenExpired = (expiraEm: string) => {
  return new Date(expiraEm).getTime() <= Date.now()
}

const clearStoredAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

const saveStoredAuth = (auth: AuthResponse) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth))
}

const loadStoredAuth = (): AuthResponse | null => {
  const rawAuth = localStorage.getItem(AUTH_STORAGE_KEY)

  if (!rawAuth) {
    return null
  }

  try {
    const auth = JSON.parse(rawAuth) as AuthResponse

    if (!auth.token || !auth.expiraEm || isTokenExpired(auth.expiraEm)) {
      clearStoredAuth()
      return null
    }

    return auth
  } catch {
    clearStoredAuth()
    return null
  }
}

const toUser = (auth: AuthResponse | null): AuthUser | null => {
  if (!auth) {
    return null
  }

  return {
    usuarioId: auth.usuarioId,
    nome: auth.nome,
    email: auth.email,
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<AuthResponse | null>(() => loadStoredAuth())

  const login = async (credentials: LoginCredentials) => {
    const authResponse = await authService.login(credentials)
    saveStoredAuth(authResponse)
    setAuth(authResponse)
  }

  const register = async (credentials: RegisterCredentials) => {
    const authResponse = await authService.register(credentials)
    saveStoredAuth(authResponse)
    setAuth(authResponse)
  }

  const logout = () => {
    clearStoredAuth()
    setAuth(null)
  }

  const value: AuthContextValue = {
    user: toUser(auth),
    token: auth?.token ?? null,
    isAuthenticated: Boolean(auth?.token),
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }

  return context
}
