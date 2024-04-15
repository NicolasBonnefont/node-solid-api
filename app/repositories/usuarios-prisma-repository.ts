import { Usuarios } from "@prisma/client"
import prisma from "../db/prisma"
import { usuarioRepository, usuarioType } from "./usuarios-repository"

export default class UsuarioPrismaRepository implements usuarioRepository {
  async criarUsuario(usuario: usuarioType): Promise<usuarioType> {
    const usuario_criado = await prisma.usuarios.create({
      data: usuario
    })

    return usuario_criado
  }

  async buscarTodosUsuarios(): Promise<Usuarios[]> {
    return await prisma.usuarios.findMany()
  }

  async buscarUmUsuario(id: number): Promise<Usuarios | null> {
    return await prisma.usuarios.findUnique({
      where: { id }
    })
  }

}