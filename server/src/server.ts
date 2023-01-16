import express, { request, response } from 'express';

const app = express();

// Rota:Endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação exixstente no back-end 
// DELETE: Remove uma informação do back-end

// POST http://localhost:3333/users = Criar um usuario
// GET http://localhost:3333/users = Listar usúarios
// Get http://localhost:3333/users/5 = Buscar dados do usúario com ID 5

 const users = [
    'robson',
    'cleber',
    'rick',
    'claudio',
];

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');

   return response.json(users);
});

app.get('/users/:id')

app.post('/users', (request, response) =>{
    const user = {
        name: 'Ricik',
        email: 'rikellmeerohrig@gmail.com'
    };

    return response.json(user);
});

app.listen(3333);