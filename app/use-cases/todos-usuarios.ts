import UsuarioPrismaRepository from "../repositories/usuarios-prisma-repository"

export default class TodosUsuariosUseCase {
  constructor(private usuarioRepository: UsuarioPrismaRepository) { }

  async execute() {
    return await this.usuarioRepository.buscarTodosUsuarios()
  }
}