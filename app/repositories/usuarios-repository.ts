export type usuarioType = {
  id?: number,
  nome: string,
  idade: number
}

export interface usuarioRepository {
  criarUsuario(usuario: usuarioType): Promise<usuarioType>
  buscarTodosUsuarios(): Promise<usuarioType[]>
  buscarUmUsuario(id: number): Promise<usuarioType | null>
}