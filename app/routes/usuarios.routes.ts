import { Router } from "express"
import BuscaUsuarioController from "../controllers/usuarios/busca-um-usuario-controller"
import CriarUsuarioController from "../controllers/usuarios/criar-usuario-controller"
import TodosUsuariosController from "../controllers/usuarios/todos-usuarios-controller"

const usuariosRoutes = Router()
const todosUsuariosController = new TodosUsuariosController()
const criarUsuarioController = new CriarUsuarioController()
const buscaUsuarioController = new BuscaUsuarioController()

usuariosRoutes.get('/usuarios', todosUsuariosController.handle)
usuariosRoutes.get('/usuarios/id/:id', buscaUsuarioController.handle)
usuariosRoutes.post('/usuarios', criarUsuarioController.handle)

export default usuariosRoutes