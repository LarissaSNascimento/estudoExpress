const { response } = require('express');
const express = require('express');
const app = express();

//indica para express q usaremos os dados em JSON
app.use(express.json()); 

let usuarios =[
    {nome:'Larissa', sobrenome:'Nascimento'}
];


//http:// localhost:3000/inicio
app.get("/inicio",(request,response) => {
 return response.send('Olá mundo');
})

//http:// localhost:3000/usuarios
app.get('/usuarios',(request,response) =>{

    return response.json(usuarios);
    })

    app.post("/usuarios",(request,responde)=>{
        const{nome,sobrenome} = request.body;
        
        const novoUsuarios = usuarios.push({nome,sobrenome});
        return response.json({nome, sobrenome});
})

app.put("/usuarios/:nome", (request,response)=>{
    const{nome} = request.params;
})

app.listen(3000,() =>{
console.log('Servidor rodando!')
})
