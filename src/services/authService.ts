import { API_URL } from '../constants/api'
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '../types/Auth'

const getErrorMessage = (data: unknown, fallback: string) => {
  if (!data || typeof data !== 'object') {
    return fallback
  }

  if ('message' in data && typeof data.message === 'string') {
    return data.message
  }

  if ('title' in data && typeof data.title === 'string') {
    return data.title
  }

  if ('errors' in data && data.errors && typeof data.errors === 'object') {
    const errors = Object.values(data.errors as Record<string, unknown>)
    const firstError = errors.find(Array.isArray)

    if (firstError && typeof firstError[0] === 'string') {
      return firstError[0]
    }
  }

  return fallback
}

const parseAuthResponse = async (response: Response, fallbackError: string): Promise<AuthResponse> => {
  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(getErrorMessage(data, fallbackError))
  }

  return data as AuthResponse
}

export const authService = {
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    return parseAuthResponse(response, 'Erro ao cadastrar usuario')
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    return parseAuthResponse(response, 'Erro ao fazer login')
  },
}
