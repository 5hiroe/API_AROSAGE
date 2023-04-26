import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import errorHandler from '../helpers/error_handler.js'
import authRoutes from '../routes/auth.js'

export async function configure (app) {
  app.use(cors())
  app.use(express.static('public'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/', authRoutes)

  app.use(errorHandler)
  console.log('Express Initialized.')
}
