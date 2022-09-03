class ProductModel {
    id: number
    name: string
    price: number 
    stock: number
    imageName: string  // The image name on the backend ("1.jpg")
    image: FileList  // The image file to send to backend
  }
  
  export default ProductModel;