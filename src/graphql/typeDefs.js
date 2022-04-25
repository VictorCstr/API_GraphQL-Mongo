const {gql} = require('apollo-server')

module.exports = typeDefs = gql `
type Posts{
    _id : ID!
    title: String!
    content: String!
    author: Users!
}

input PostsInput{
    title: String!
    content: String!
    author: ID!
}

type Users{
    _id : ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String
    active: Boolean!
}

input UsersInput{
    firstName: String!
    lastName: String!
    email: String
    active: Boolean!
}

type Query{
    posts: [Posts!]!
    post(id: ID!): Posts!
    users: [Users!]!
    user(id: ID!): Users!
}

type Mutation{
    createPost(data: PostsInput!): Posts!
    updatePost(id: ID!, data: PostsInput!): Posts!
    deletePost(id: ID!): Boolean
    createUser(data: UsersInput!): Users!
    updateUser(id: ID!, data: UsersInput!): Users!
    deleteUser(id: ID!): Boolean
}

`
