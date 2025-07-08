export class Product {

    #seller;
    #price;
    #title;
    #image;
    #description;

    constructor(id, seller, price, titulo, image, description) {

        this.validate(seller, price, titulo, image, description); //validar IREP
     
        this.#seller = seller;
        this.#price = price;
        this.#title = titulo;
        this.#image = image;
        this.#description = description;
    }

    validate(seller, price, titulo, image, description) {

        if (!seller) {
            throw new Error('El vendedor es obligatorio');
        }

        if (price === undefined || price === null || isNaN(price) || price <= 0) {
            throw new Error('El precio debe ser un número mayor a 0');
        }

        if (!titulo || titulo.trim() === '') {
            throw new Error('El título es obligatorio');
        }

        if (!image || image.trim() === '') {
            throw new Error('La imagen es obligatoria');
        }

        if (!description || description.trim() === '') {
            throw new Error('La descripción es obligatoria');
        }
    }

    title(){
        return this.#title;
    }


}