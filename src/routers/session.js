const express = require('express');
const userModel = require('../Dao/models/userModel');
const{createHash,isValidPassword}= require('../utils/passwordHash');
const { Passport } = require('passport');

const sessionRouter = express.Router();

sessionRouter.get('/', (req, res) => {
  return res.json(req.session)
  if (!req.session.counter) {
    req.session.counter = 1
    req.session.name = req.query.name

    return res.json(`Bienvenido ${req.session.name}`)
  } else {
    req.session.counter++

    return res.json(`${req.session.name} has visitado la página ${req.session.counter} veces`)
  }
});

sessionRouter.post('/register',async (req,res) => {
  const body = req.body
  body.password = createHash(body.password)
  console.log({body});
 const user = await userModel.create(body)

//  if(req.query.client === 'view'){
//   return res.redirect('/login')
//  }

 return res.redirect('/login')

//  return res. status(201).json(user)
 })

sessionRouter.post('/login',async(req,res)=>{
  let user =await userModel.findOne({email:req.body. email})
  if(!user){
    return res.status(401).json({
      error:'El usuario no exixte en nuestro sistema'
    })
  }
  if(!isValidPassword(req.body.password,user.password)){
    return res.status(401).json({
      error:'El dato es incorrecto'
    })

  }
  user = user.toObject()

  delete user.password

  req.session.user =user

  // return res.json(user)

  return res.redirect('/profile')

 
});
sessionRouter.post('/recovery-password',async(req,res)=>{
  let user = await userModel.findOne({email:req.body.email})

  if(!user){
    return res.status(401).json({
      error:'El usuario no existe en el sistema'
    })
  }
  const newPassword = createHash(req.body.password)
  await userModel.updateOne({email:user.email},{password:newPassword})
  return res.redirect('/login')


})

module.exports = sessionRouter