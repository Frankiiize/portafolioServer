const faker = require('faker');

class productsService {
  constructor() {
    this.products = [];
    this.generate();
    
  }
  generate() {
    for (let index = 0; index < 2; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
      })
      
    } 
  }
  create(data) {
    // generamos el id random (esto por el uso de la libreria faker la bd genera su propio ID)
    const newProduct = {
      id: faker.datatype.uuid(), 
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }
  find(){
    return this.products ;
  }
  findOne(id){
    return this.products.find((item) => item.id === id)
  }
  update(id, updateProduct){
    const index = this.products.findIndex((item) => item.id === id);
    if(index === -1){
      return 'producto no enconotrado'
    }
    const product = this.products[index]; 
    this.products[index] = { 
      ...product,            
      ...updateProduct
    }
    return this.products[index] ;

  }
  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if(index === -1){
      return 'producto no enconotrado'
    }
    this.products.splice(index, 1);
    return {
      message: 'se elimino el producto',
      id: id,
    }
  }
}

module.exports = productsService ;