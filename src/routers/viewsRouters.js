const { Router } = require('express');
const ProductManagerMongo = require('../Dao/productManagerMongo');
const io = require('../utils/io'); // Asegúrate de que la ruta sea correcta
const CartsManagerMongo = require('../Dao/cartsManagerMongo');
const userModel = require('../Dao/models/userModel'); 
const cartManager = new CartsManagerMongo(); 
const viewsRouter = new Router();

const productManager = new ProductManagerMongo(io); // Asegúrate de que 'io' esté disponible

// Middleware de sesión
function sessionMiddleware(req, res, next) {
    if (req.session.user) {
        console.log('req.session.user');
        return res.redirect('/profile');
    }
    return next();
}
viewsRouter.get('/github', passport.authenticate('github'));
viewsRouter.get('/github-callback', passport.authenticate('github', {
    successRedirect: '/profile', // Redirige a la página de perfil después de la autorización exitosa
    failureRedirect: '/login', // Redirige a la página de inicio de sesión en caso de error
}));


viewsRouter.get('/register', sessionMiddleware, (req, res) => {
    console.log('register');
    return res.render('register');
});

viewsRouter.get('/login', (req, res) => {
    console.log('login');
    return res.render('login');
});

viewsRouter.get('/api/sessions/recovery-password', sessionMiddleware, (req, res) => {
    return res.render('recovery-password');
});


viewsRouter.get('/profile', (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    const user = req.session.user;

    // Renderizar la página de perfil estándar para todos los usuarios
    return res.render('profile', { user });
});

viewsRouter.get('/allproducts', async (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    // Verificar si el usuario es un administrador
    if (req.session.user.isAdmin) {
        // Si es un administrador, mostrar la página "allproducts"
        const io = req.app.get('io');
        const productManager = new ProductManagerMongo(io);

        try {
            // Obtener la lista de productos utilizando productManager
            const products = await productManager.getProducts();
            return res.render('products/allproducts', { products, user: req.session.user });
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            return res.redirect('/error?message=Error al obtener los productos');
        }
    } else {
        // Si no es un administrador, redirigirlo a su página de perfil
        return res.redirect('/profile');
    }
});