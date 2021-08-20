import { Router } from 'express'
import { register, login, getAll } from '../controller/AuthController'

const route = Router()

const routes = [
  route.get('/', getAll),
  route.post('/register', register),
  route.post('/login', login),
]

export default routes
