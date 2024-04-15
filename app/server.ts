import express from 'express'
import usuariosRoutes from './routes/usuarios.routes'

const app = express()

app.use(express.json())
app.use(usuariosRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Listem on Port ${process.env.PORT}`)
})