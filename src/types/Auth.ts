export interface AuthResponse {
  usuarioId: number
  nome: string
  email: string
  token: string
  expiraEm: string
}

export interface LoginCredentials {
  email: string
  senha: string
}

export interface RegisterCredentials {
  nome: string
  email: string
  senha: string
}

export interface AuthUser {
  usuarioId: number
  nome: string
  email: string
}
