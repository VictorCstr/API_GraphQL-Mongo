const Posts = require('./modules/models/Posts.js')
const Users = require('./modules/models/Users.js')

 const resolvers = {
    Users:{
        fullName:(users) => users.firstName + " " + users.lastName
    },
    Posts:{
        author:(posts) => Users.findById(posts.author)
    },
    Query:{
        posts: async () => await Posts.find()  ,
        post: async (_ , {id}) =>  await Posts.findById(id),
        users: async () => await Users.find()  ,
        user: async (_ , {id}) =>  await Users.findById(id)
    },
    Mutation:{
        createPost: async (_ , {data}) =>  await Posts.create(data),
        updatePost: async (_,{id, data}) => await Posts.findOneAndUpdate(id, data, { new: true}),
        deletePost: async (_, id) => {
             await Posts.findOneAndDelete(id)
             return true
    },
        createUser: async (_ , {data}) => await Users.create(data),
        updateUser: async (_,{id, data}) => await Users.findOneAndUpdate(id, data, { new: true}),
        deleteUser: async (_, id) => {
            await Users.findOneAndDelete(id)
            return true
    },
 },
   
}

module.exports = resolvers