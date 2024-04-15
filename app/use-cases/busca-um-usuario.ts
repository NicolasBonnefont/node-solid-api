import UsuarioPrismaRepository from "../repositories/usuarios-prisma-repository"

export default class BuscaUmUsuarioUseCase {
  constructor(private usuarioRepository: UsuarioPrismaRepository) { }

  async execute(id: number) {
    return await this.usuarioRepository.buscarUmUsuario(id)
  }
}