import { Request, Response } from "express"
import UsuarioPrismaRepository from "../../repositories/usuarios-prisma-repository"
import TodosUsuariosUseCase from "../../use-cases/todos-usuarios"

export default class TodosUsuariosController {
  async handle(re: Request, res: Response) {
    try {
      const usuarioPrismaRepository = new UsuarioPrismaRepository()
      const usuarioUseCase = new TodosUsuariosUseCase(usuarioPrismaRepository)

      const usuarios = await usuarioUseCase.execute()

      return res.send(usuarios)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
}