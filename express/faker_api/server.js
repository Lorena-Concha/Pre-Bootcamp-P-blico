const express = require("express");
const app=express();
const port = 8080;
const { faker } = require('@faker-js/faker');
const Usuario = require("./models/Usuario");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Empresa = require("./models/empresa");

app.use(express.json());

app.listen(port,()=>console.log("Escuchando puerto: "+ port));



app.get("/api/users/new",(req,res) =>{
    const nuevoUsuario = new Usuario()
    res.json(nuevoUsuario);
})

app.get("/api/companies/new",(req,res) => {
    const nuevaEmpresa= new Empresa()
    res.json(nuevaEmpresa);
})

app.get("/api/user/company",(req,res) =>{
    const nuevoUsuario = new Usuario()
    const nuevaEmpresa = new Empresa()
    res.json({usuario : nuevoUsuario, empresa : nuevaEmpresa});
})

