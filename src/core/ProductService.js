import { Product } from './Product';

export class ProductService {

   static instance;
    constructor(){
        if (ProductService.instance) {
            return ProductService.instance;
        }
        ProductService.instance = this;
    }

    post(nombre, precio, titulo, image, description){

        let product = new Product(nombre, precio, titulo, image, description);
        fetch('https://684f3618f0c9c9848d2a639d.mockapi.io/Store',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err =>{
            console.error(err);
        });
    }

    delete(id){
        fetch(`https://684f3618f0c9c9848d2a639d.mockapi.io/Store/${id}` ,{
            method: 'DELETE',
             headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err =>{
            console.error(err);
        });
    }

}