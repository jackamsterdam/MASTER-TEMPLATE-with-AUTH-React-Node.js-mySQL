// import ProductModel from "../Models/ProductModel";

// // Products State - products data needed in the application level:
export class ProductsState {
    //     public products: ProductModel[] = [];
    }
    
    // // Products Action Type - any action which can be done on the above products state:
    // export enum ProductsActionType {
    //     FetchProducts = "FetchProducts",
    //     AddProduct = "AddProduct",
    //     UpdateProduct = "UpdateProduct",
    //     DeleteProduct = "DeleteProduct"
    // }
    
    // // Products Action - any single object sent to the store during "dispatch":
    // export interface ProductsAction {
    //     type: ProductsActionType;
    //     payload: any;
    // }
    
    // // Products Action Creators - function for creating ProductsAction objects. each function creates one Action object:
    // export function fetchProductsAction(products: ProductModel[]): ProductsAction {
    //     return { type: ProductsActionType.FetchProducts, payload: products };
    // }
    // export function addProductAction(product: ProductModel): ProductsAction {
    //     return { type: ProductsActionType.AddProduct, payload: product };
    // }
    // export function updateProductAction(product: ProductModel): ProductsAction {
    //     return { type: ProductsActionType.UpdateProduct, payload: product };
    // }
    // export function deleteProductAction(id: number): ProductsAction {
    //     return { type: ProductsActionType.DeleteProduct, payload: id };
    // }
    
    // // Products Reducer - the main function performing any action on products state:
    // // the new ProductsState() is a default value for the first time only
    // export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    
    //     // Must duplicate the current state and not touch the given current state: 
    //     const newState = { ...currentState };
    
    //     switch (action.type) {
    
    //         case ProductsActionType.FetchProducts:
    //             newState.products = action.payload; // Here the payload is the products list.
    //             break;
    
    //         case ProductsActionType.AddProduct:
    //             newState.products.push(action.payload); // Here the payload is a single object to add.
    //             break;
    
    //         case ProductsActionType.UpdateProduct:
    //             const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id); // Here the payload is a single object to update.
    //             if (indexToUpdate >= 0) {
    //                 newState.products[indexToUpdate] = action.payload;
    //             }
    //             break;
    
    //         case ProductsActionType.DeleteProduct:
    //             const indexToDelete = newState.products.findIndex(p => p.id === action.payload); // Here the payload is the id to delete.
    //             if (indexToDelete >= 0) {
    //                 newState.products.splice(indexToDelete, 1);
    //             }
    //             break;
    //     }
    
    //     return newState;
    // }
    