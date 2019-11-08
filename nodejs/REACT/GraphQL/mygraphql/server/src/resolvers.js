import { tasks } from './sample'; // Mock DB
import User from './models/User';

/*-------------------------------------
 *              RESOLVERS
 *------------------------------------ */

// Nos dice que es lo que vamos a hacer cuando consulten algo
export default {
    Query: {
        hello: () => {
            return ' Hello world with GraphQL';
        },
        greet: (root, { name }, context) => {
            console.log(context);
            return `Hola ${name}!`;
        },
        tasks: () => {
            return tasks;
        },
        Users: async() => {
            try {
                return await User.find();
            } catch (err) {
                console.log(`err`);
            }

        }


    },
    Mutation: {
        myMutation: (_, { input }) => {
            input._id = tasks.length;
            console.log(input);
            tasks.push(input);
            return input;
        },
        createUser: async(_, { input }) => {
            try {
                let newUser = new User({
                    firstName: input.firstName,
                    lastName: input.lastName,
                    age: input.age
                });
                let userDB = await newUser.save();
                console.log(userDB)
                return userDB;
            } catch (err) {
                console.log(`${err}`);
            }
        },
        deleteUser: async(_, { _id }) => {
            try {
                let deleted = await User.findByIdAndDelete(_id);
                if (!deleted) console.log('Usuario no encontrado');
                console.log('Usuario Eliminado');

                return deleted;
            } catch (err) {
                console.log(`${err}`);
            }
        },
        updateUser: async(_, { _id, input }, context) => {
            try {

                let updated = await User.updateOne({_id:_id},{firstName:input.firstName,lastName:input.lastName,age:input.age});
                if (!updated) console.log('update khong thanh cong');
                console.log(updated);
                return updated;
            } catch (err) {
                console.log(`${err}`);
            }
        }
    }
};