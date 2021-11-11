const { application } = require("express");
const express = require("express");
const { connect } = require("mssql");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("el servidor esta inicializado en el puerto: ",PORT);
});

const rest = new (require('rest-mssql-nodejs'))({
    user: 'jaimepadilla',
    password: 'Jaime1105',
    server: 'usuarios-server.database.windows.net',
    database: 'usuarios_db',
    encrypt: true
});

//route
app.get('/',async (req,res) =>{

    let resultado
    //setTimeout(async () =>{

    resultado = await rest.executeQuery('select * from usuario');
    
    console.log(resultado.data);
    res.json(resultado.data);
   // }, 1500);    
    
});