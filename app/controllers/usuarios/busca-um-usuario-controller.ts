import { Request, Response } from "express"
import UsuarioPrismaRepository from "../../repositories/usuarios-prisma-repository"
import BuscaUmUsuarioUseCase from "../../use-cases/busca-um-usuario"

export default class BuscaUsuarioController {
  async handle(req: Request, res: Response) {
    try {

      const usuarioPrismaRepository = new UsuarioPrismaRepository()
      const buscaUmUsuario = new BuscaUmUsuarioUseCase(usuarioPrismaRepository)

      const busca_usuario = await buscaUmUsuario.execute(Number(req.params.id))

      return res.send(busca_usuario)

    } catch (error) {
      return res.status(500).send(error)
    }
  }
}