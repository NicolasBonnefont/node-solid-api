import { usuarioRepository, usuarioType } from "../repositories/usuarios-repository"

export default class CriarUsuarioUseCase {
  constructor(private usuarioRepository: usuarioRepository) { }
  async execute(usuario: usuarioType) {

    const cria_usuario = await this.usuarioRepository.criarUsuario(usuario)

    return cria_usuario

  }
}