import express, { NextFunction, Request, Response } from 'express'
import logic from '../05-logic/logic'

const router = express.Router()

//   // http://localhost:3001/api/products/
//   router.get('/products', async (request: Request, response: Response, next: NextFunction) => {
//     try {
//          const products = await productsLogic.getAllProducts()
//          response.json(products)

//     } catch (err: any) {
//         //All errors from business logic will end up here as well and go straight to my last middleware in app.js
//         next(err)
//     }
// }) 

// // http://localhost:3001/api/products/5
// router.get('/products/:id', verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       const id = +request.params.id
//       const product = await productsLogic.getOneProduct(id)
//       response.json(product)
//   } catch (err: any) {
//       next(err)
//   }
// })

// // http://localhost:3001/api/products/
// router.post('/products', verifyLoggedIn,async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       request.body.image = request.files?.pic 
//       const product = new ProductModel(request.body)
//       const addedProduct = await productsLogic.addProduct(product)
//       response.status(201).json(addedProduct)
//   } catch (err: any) {
//       next(err)
//   }
// })

// // http://localhost:3001/api/products/5
// router.put('/products/:id', verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       request.body.image = request.files?.pic
//       const id = +request.params.id
//       request.body.id = id 
//       const product = new ProductModel(request.body)
//       const udpatedProduct = await productsLogic.updateFullProduct(product)
//       response.json(udpatedProduct)
//   } catch (err: any) {
//       next(err)
//   } 
// })

// // http://localhost:3001/api/products/5
// router.patch('/products/:id', verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       //לחלץ id
//       request.body.image = request.files?.pic
//       const id = +request.params.id 
//       request.body.id = id 
//       const product = new ProductModel(request.body)
//       const updatedProduct = await productsLogic.updatePartialProduct(product)
//       response.json(updatedProduct)
//   } catch (err: any) {
//       next(err)
//   }
// })

// // http://localhost:3001/api/products/5
// router.delete('/products/:id', verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
//   try {
//        const id = +request.params.id 
//        await productsLogic.deleteProduct(id)
//        response.sendStatus(204)
//   } catch (err: any) {
//       next(err)
//   }
// })

// //הנגשת תמונה  dont forget :imageName 
// // http://localhost:3001/api/products/images/fjskfjsdkfjsdkfjs23423j23j4 
// router.get('/products/images/:imageName', async (request: Request, response: Response, next: NextFunction) => {
//   try {
 
//       const imageName = request.params.imageName
//       const absolutePath = path.join(__dirname, '..', 'assets', 'images', 'products', imageName)
//       response.sendFile(absolutePath)


//   } catch (err: any) {
//       next(err)
//   }
// })

// // Bonus: 

// // price cheaper than 
// //http://localhost:3001/api/products/cheaper-than/54
// router.get('/products/cheaper-than/:num',async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       const num = +request.params.num
//       const products = await productsLogic.cheaperThan(num)
//       response.json(products)



//   } catch (err: any) {
//       next(err)
//   }
// })

// // price more expensive then 
// // http://localhost:3001/api/products/expensive-than/54
// router.get('/products/expensive-than/:num',async (request: Request, response: Response, next: NextFunction) => {
//   try {
//       const num = +request.params.num
//       const products = await productsLogic.expensiveThan(num)
//       response.json(products)
      
//   } catch (err: any) {
//       next(err)
//   }
// })


export default router 