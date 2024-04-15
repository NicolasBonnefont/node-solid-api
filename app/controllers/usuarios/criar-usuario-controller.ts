import { Request, Response } from 'express'
import { z } from 'zod'
import UsuarioPrismaRepository from '../../repositories/usuarios-prisma-repository'
import CriarUsuarioUseCase from '../../use-cases/criar-usuario'

export const usuarioSchema = z.object({
  nome: z.string(),
  idade: z.number()
})

export default class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    try {

      const usuarioPrismaRepository = new UsuarioPrismaRepository()
      const usuarioUseCase = new CriarUsuarioUseCase(usuarioPrismaRepository)

      const usuario = usuarioSchema.parse(req.body)

      const novo_usuario = await usuarioUseCase.execute(usuario)

      return res.send(novo_usuario)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
}