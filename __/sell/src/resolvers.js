import User from './models/User';
import Kq from './models/Kq'
export const resolvers = {
    Query: {
        greet: (root, { name }, context) => {
            console.log(context);
            return `Hola ${name}!`;
        },
        Users: async() => {
            try {
                return await User.find();
            } catch (err) {
                console.log(`err`);
            }
        },
        kq:async(_,{where,skip,limit})=>{
            try {
                let s=0
                let l=50
                if(limit<l){l=limit}
                if(skip){s=skip}
                if(where){
                    return await Kq.find({thu:where}).skip(s*7).limit(l).sort({time:-1});
                }
                return await Kq.find().skip(s*7).limit(l).sort({time:-1})
            }catch(err){console.log(err.message)}
        },
        tansuat:async(_,{tinh,songay})=>{
            let data=tk(tinh,songay).then(r=>{
                let ar=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                r.map((v,i)=>{
                    ar[+v]+=1
                })
                return ar
            }).then(r=>r)
            return data
        },
        tong:async(_,{tinh,songay})=>{
            let data=tk(tinh,songay).then(r=>{
                let a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                r.map((v,i)=>{
                    let b=v.slice(0,1)
                    let c=v.slice(1,2)
                    let d=Number(b)+Number(c)
                    a[d]+=1
                })
                let ar=[a[0]+a[10],a[1]+a[11],a[2]+a[12],a[3]+a[13],a[4]+a[14],a[5]+a[15],a[6]+a[16],a[7]+a[17],a[8]+a[18],a[9]+a[19],]
                return ar
            }).then(r=>r)
            return data
        },
        logan:async(_,{tinh,songay})=>{
            let data=tk(tinh,100,true).then(r=>{
                let a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                let b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                r.map((v,i)=>{
                    v.map((v1,i1)=>{
                        a[+v1]+=1
                    })
                    a.map((va,ia)=>{
                        if(va==0){
                            b[ia]+=1
                        }
                    })
                })
                return b
            }).then(r=>r)
            return data
        },
        bangtk:async(_,{tinh,songay})=>{


                let data=tk(tinh,songay,true)
                console.log(data)
                   return data
            
        }
    },
    Mutation: {
        createUser: async(_, { input }) => {
            try {
                let newUser = new User({
                    firstName: input.firstName,
                    lastName: input.lastName,
                    age: input.age
                });
                let userDB = await newUser.save();
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
                let updated = await User.findByIdAndUpdate(_id, input, { new: true });
                if (!updated) console.log('Usuario no encontrado');
                console.log('Usuario Actualizado');
                return updated;
            } catch (err) {
                console.log(`${err}`);
            }
        }
    }
};
const tk=async(tinh,songay,r)=>{
    let a,b,c,e
    switch(tinh){
        case "1":{a=1,b=6,c=0,e=1};break;
        case "2":{a=1,b=8,c=1,e=1};break;
        case "3":{a=1,b=8,c=2,e=1};break;
        case "7":{a=2,b=8,c=0,e=1};break;
        case "8":{a=2,b=8,c=1,e=1};break;
        case "9":{a=2,b=8,c=2,e=1};break;
        case "10":{a=3,b=8,c=0,e=1};break;
        case "11":{a=3,b=8,c=1,e=1};break;
        case "12":{a=3,b=8,c=2,e=1};break;
        case "13":{a=4,b=8,c=0,e=1};break;
        case "14":{a=4,b=8,c=1,e=1};break;
        case "15":{a=4,b=8,c=2,e=1};break;
        case "16":{a=5,b=8,c=0,e=1};break;
        case "17":{a=5,b=8,c=1,e=1};break;
        case "18":{a=5,b=8,c=2,e=1};break;
        case "19":{a=6,b=8,c=1,e=1};break;
        case "20":{a=6,b=8,c=2,e=1};break;
        case "21":{a=6,b=8,c=3,e=1};break;
        case "22":{a=0,b=8,c=0,e=1};break;
        case "23":{a=0,b=8,c=1,e=1};break;
        case "24":{a=0,b=8,c=2,e=1};break;
        
        case "26":{a=1,b=8,c=0,e=2};break;
        case "27":{a=1,b=8,c=1,e=2};break;
        case "28":{a=2,b=8,c=1,e=2};break;
        case "29":{a=2,b=8,c=0,e=2};break;
        case "30":{a=3,b=6,c=0,e=2};break;
        case "31":{a=3,b=0,c=1,e=2};break;
        case "32":{a=4,b=8,c=0,e=2};break;
        case "33":{a=4,b=8,c=1,e=2};break;
        case "34":{a=4,b=8,c=2,e=2};break;
        case "35":{a=5,b=8,c=0,e=2};break;
        case "36":{a=5,b=8,c=1,e=2};break;
        case "37":{a=6,b=8,c=1,e=2};break;
        case "38":{a=6,b=8,c=2,e=2};break;
        case "39":{a=0,b=8,c=0,e=2};break;

        case "0":{e=3};break
    }

    let data
    let data1
    await Kq.fm(a,b,c,e,songay,(result)=> {
           data1=result.r1
           data=result.r
       }) 
    if(r==true){
        return data1
    }
    return data
}
