//here will be the queries for mutations
const resolvers = {
    Query: {
        users: () => { 
            return [{ id: "hello users" }]
        },
    },

    Mutation: {
        createUser: () => {
            return "new user created";
        },
    },
}

export default resolvers;
