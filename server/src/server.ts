import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de usuário')

    response.json([
        'Diego',
        'Ericson',
        'teste',
        'Teste 2',
        'teste 3'
    ])
})

app.listen(3333)