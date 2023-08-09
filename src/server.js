const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const handlebars = require('express-handlebars');
const socketServer = require('./utils/io');
const filePath = path.join(__dirname, 'products.json');

// Implementación de enrutadores
const productsRouter = require('./routers/product');
const cartsRouter = require('./routers/carts');
const viewsRouterFn = require('./routers/viewsRouters');
const productRouter = require('./routers/product');

const app = express();
const MONGODB_CONNECT = `mongodb+srv://analauravillarruel:Elitelaura74@cluster0.xw7lmtu.mongodb.net/ecommerceretryWrites=true&w=majority`
mongoose.connect(MONGODB_CONNECT)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => {
    if (error) {
      console.log('Error al conectarse a la base de datos', error.message)
    }
  })


// Middleware para el manejo de JSON y datos enviados por formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Seteo de forma estática la carpeta public
app.use(express.static(__dirname + '/public'));

// Crear el servidor HTTP
const PORT = 8080;
const httpServer = app.listen(PORT, () =>
  console.log(`Servidor corriendo en el ${PORT}`)
);

// Crear el objeto `io` para la comunicación en tiempo real
const io = socketServer(httpServer);
// Crear las rutas de vistas y pasar el objeto `io` a `viewsRouterFn`
const viewsRouter = viewsRouterFn(io);

// Rutas base de enrutadores
app.use('/api/products', productRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);

// Ruta de health check
app.get('/healthCheck', (req, res) => {
  res.json({
    status: 'running',
    date: new Date(),
  });
});
