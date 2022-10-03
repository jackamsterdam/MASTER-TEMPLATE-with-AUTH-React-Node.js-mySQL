import { OkPacket } from "mysql";
import dal from "../04-dal/dal";
import ErrorModel from "../03-models/error-model";
import path from "path";


// for photos only: 
// import {v4 as uuid} from 'uuid'
// import safeDelete from "../01-utils/safe-delete";



// async function getAllProducts():Promise<ProductModel[]> {
//     const sql = `SELECT 
//                   ProductId AS id,
//                   ProductName AS name, 
//                   UnitPrice AS price , 
//                   UnitsInStock AS stock,
                  
//                   ImageName AS imageName  //not sure
  
//                   FROM Products`

//     const products = await dal.execute(sql);
  
//     return products 

//   }

// async function getOneProduct(id: number): Promise<ProductModel> {
//     const sql = `SELECT * 
//                  FROM Products
//                  WHERE id = ?`
//     //    or just get some and change name to match back and front: 
//     const sql = `SELECT 
//                  ProductId AS id,
//                  ProductName AS name,
//                  UnitPrice AS price,
//                  UnitsInStock AS stock,
//                  ImageName AS imageName // not sure
//                  FROM Products
//                  WHERE ProductId = ?`

//     const products = await dal.execute(sql, [id])
//     const product = products[0]
//     if (!product) throw new ErrorModel(404, `Resource with id ${id} not found.`)
//     return product
// }


// async function addProduct(product: ProductModel): Promise<ProductModel> {
 
//         const errors = product.validatePost()
//         if (errors) throw new ErrorModel(400, errors)
    
//         //image handling: 
//         if (product.image) {
//           const extension = product.image.name.substring(product.image.name.lastIndexOf('.'))
//           product.imageName = uuid() + extension
//           Dont use this line: await product.image.mv('./src/assets/images/products/' + product.imageName)
//           await product.image.mv(path.join(__dirname, '..', '.assets', 'images', product.imageName))
//           delete product.image
//         }

      
//         const sql = `INSERT INTO Products VALUES(DEFAULT,?,?,?,?,?)`  //Insert all vs few: 
//         const sql = `INSERT INTO Products(ProductName, UnitPrice, UnitsInStock)
//                      VALUES(?, ?, ?)`
    
//       const info: OkPacket = await dal.execute(sql, [product.name, product.price, product.stock])
    
//       product.id = info.insertId
//       console.log("product at end just before return", product);
    
//       return product  //btw we returning the image without the file image just the imageName
//     }

// async function updateFullProduct(product: ProductModel): Promise<ProductModel> {
  
//     const errors = product.validatePut()
//     if (errors) throw new ErrorModel(400, errors)
  

//     //handle image:
//     const dbProduct = await getOneProduct(product.id)
//     product.imageName = dbProduct.imageName   
  
//     if (product.image) {  
//        Dont use this line:   safeDelete('./src/assets/images/products/' + product.imageName)
//        safeDelete(path.join(__dirname, '..', '.assets', 'images', product.imageName))
//        const extension = product.image.name.substring(product.image.name.lastIndexOf('.'))
//        product.imageName = uuid() + extension 
//        Dont use this line: await product.image.mv('./src/assets/images/products/' + product.imageName)
//        await product.image.mv(path.join(__dirname, '..', '.assets', 'images', product.imageName))
//        delete product.image
     
//     }
   
//     const sql = `UPDATE Products
//                  SET 
//                  ProductName = ?, UnitPrice =  ?, UnitsInStock = ?
//                  WHERE ProductId = ?`
  
//     const info: OkPacket = await dal.execute(sql, [product.name, product.price, product.stock, product.id])
  
  
//     if (info.affectedRows === 0) throw new ErrorModel(404, `Resource with id ${product.id} not found.`)
  
//    return product
  
//   }
  
//   async function updatePartialProduct(product:ProductModel): Promise<ProductModel> {
  
//         const errors = product.validatePatch()
//         if (errors) throw new ErrorModel(400, errors)
       
//         const dbProduct = await getOneProduct(product.id)
 
  
//         //handle image:
//          product.imageName = dbProduct.imageName
//          if (product.image) {       
//           DONT USE THIS:  safeDelete('./src/assets/images/products/' + product.imageName)
//           safeDelete(path.join(__dirname, '..', '.assets', 'images', product.imageName))
//           const extension = product.image.name.substring(product.image.name.lastIndexOf('.'))
//           product.imageName = uuid() + extension 
//           DONT USE THIS LINE: await product.image.mv('./src/assets/images/products/' + product.imageName)
//           await product.image.mv(path.join(__dirname, '..', '.assets', 'images', product.imageName))
//           delete product.image
//          }
  
   
//         for (const prop in product) {
//           if (product[prop]) {
//             dbProduct[prop] = product[prop]
//           }
//         }
 
//         const updatedProduct = await updateFullProduct(new ProductModel(dbProduct))
  
//         return updatedProduct 
//   }


// async function deleteProduct(id: number): Promise<void> {

//    //we need to delete image from disk as well: 
//    const product = await getOneProduct(id)

//    safeDelete(path.join(__dirname, '..', '.assets', 'images', product.imageName))

//     const sql = `DELETE FROM Products 
//                  WHERE ProductId = ?`
    
//     const info:OkPacket = await dal.execute(sql, [id])
//     if (info.affectedRows === 0) throw new ErrorModel(404, `Resource with id ${id} not found.`)
//   }

// bonus: 

// async function cheaperThan(num: number): Promise<ProductModel[]> {
//     const sql = `SELECT * FROM products 
//                  WHERE UnitPrice >= ?
//                  ORDER BY UnitPrice ASC;`

//     const products = await dal.execute(sql, [num])
//     return products 
// }

// async function expensiveThan(num: number): Promise<ProductModel[]> {
//    const sql = `SELECT * FROM products 
//                 WHERE UnitPrice <= ?
//                 ORDER BY UnitPrice ASC;`

//   const products = await dal.execute(sql, [num])
//   return products 
// }



export default {

}