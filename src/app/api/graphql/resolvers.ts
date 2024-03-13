//here will be the queries for mutations
const resolvers = {
    // Query: {
    //     users: () => { 
    //         return [{ id: "hello users" }]
    //     },
    // },

    // Mutation: {
    //     createUser: () => {
    //         return "new user created";
    //     },
    // },

    Query: {
        users: async (_: any, __: any, context: {
            dataSources: {
                users: {fetchAllUsers: () => any}
            }
        }) => {
            try{
                 return await context.dataSources.users.fetchAllUsers()
            }catch(err){
              throw new Error("failed to fetch the users");
            }
        } ,
    },

    Mutation: {
        createUser: async (_: any, {input}: any, context: any) => {
            try{
             const newUser = await context.datasource.users.createUser({
                input
             });
             return newUser;
            }catch(err){
                throw new Error ("Failed to create the user")
            }
        }
    }
}

export default resolvers;
