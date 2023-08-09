const socket = io()
const notificationContainer = document.getElementById('notificationContainer')
const productList = document.getElementById('product-list');
const thumnailsInput = document.getElementById('thumbnails')
const addProductForm = document.getElementById('add-product-form')
const deleteProductForm = document.getElementById('delete-product-form')

socket.on('notification', notif => {
  notificationContainer.innerHTML = notif
  setTimeout(() => {
    notificationContainer.innerHTML = ''
  }, 2500)
})

socket.on('newProduct', (product) => {
  const parsedProduct = JSON.parse(product);
  const newProductItem = document.createElement('li');
  newProductItem.textContent = `${parsedProduct.id} - ${parsedProduct.title} - ${parsedProduct.price}`;
  productList.appendChild(newProductItem);
});

socket.on('productDeleted', (productId) => {
  const productItem = document.getElementById(productId);

  if (productItem) {
    productItem.remove()
  }
});

//creo esta función para que me configure correctamente lo que paso al input, con las comas consigo separar las rutas
const getThumbnails = (thumbnails) => {
  const thumbnailsArray = thumbnails ? thumbnails.split(',') : [];
  const thumbnailsArrayTrimmed = thumbnailsArray.map(url => url.trim());
  return thumbnailsArrayTrimmed;
}

addProductForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(addProductForm);
  const thumbnails = getThumbnails(thumnailsInput.value)
  const product = Object.fromEntries(formData.entries());
  const newProduct = {
    ...product,
    thumbnails
  }
  socket.emit('addProduct', JSON.stringify(newProduct))
  addProductForm.reset();
})

deleteProductForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(deleteProductForm);
  const productId = Object.fromEntries(formData.entries()).id;
  socket.emit('deleteProduct', productId)
  deleteProductForm.reset();
})