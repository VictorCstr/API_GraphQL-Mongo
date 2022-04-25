const { ApolloServer } = require('apollo-server') 
const typeDefs = require('./graphql/typeDefs')
const resolvers= require('./graphql/resolvers')
const mongoose = require('mongoose')


try {
    mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    console.log('Ocorreu um erro ao conectar ao mongoose:' + error)
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then( ({url}) => {
    console.log('Servidor iniciando na porta:' + url)
})
