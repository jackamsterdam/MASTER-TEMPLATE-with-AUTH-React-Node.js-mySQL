import express, { NextFunction, Request, Response } from 'express'
import logic from '../05-logic/logic'

const router = express.Router()

// http://localhost:3001/api/
router.get('/', async (request: Request, response: Response, next: NextFunction) => {
  try {



  } catch (err: any) {
    next(err)
  }
})


export default router 