import { Schema, model } from 'mongoose';

const kqSchema = new Schema({
    time: { type: Number, required: true, index: true, unique: true },
    matinh:Array,
    thu:{type:Number},
    kqmn:Object,
    kqmt:Object,
    kqmb:Object,
});

kqSchema.virtual('lomn').get(function() {
    return smn(this.kqmn)
})
kqSchema.virtual('lomt').get(function() {
    return smn(this.kqmt)
})
kqSchema.virtual('lomb').get(function() {
    return smb(this.kqmb)
})
kqSchema.statics.fm = async function (a,b,c,e,d,callback) {
    switch(e){
        case 1:{
            let resultmn=[]
            let result1mn=[]
            let r = await this.find({$and : [
                { $or : [ { thu : a }, { thu : b } ] }
            ]}).limit(d).sort({time:-1})
            r.map((v,i)=>{
                resultmn=resultmn.concat(v.lomn[c])
                result1mn.push(v.lomn[c])
            })
            return callback({
                r:resultmn,
                r1:result1mn
            }) 
        }
        case 2:{
            let resultmt=[]
            let result1mt=[]
            let r = await this.find({$and : [
                { $or : [ { thu : a }, { thu : b } ] }
            ]}).limit(d).sort({time:-1})
            r.map((v,i)=>{
                resultmt=resultmt.concat(v.lomt[c])
                result1mt.push(v.lomt[c])
            })
            return callback({
                r:resultmt,
                r1:result1mt
            })
        }
        case 3:{
            let resultmb=[]
            let result1mb=[]
            let r = await this.find({}).limit(d).sort({time:-1})
            r.map((v,i)=>{
                resultmb=resultmb.concat(v.lomb)
                result1mb.push(v.lomb)
            })
            return callback({
                r:resultmb,
                r1:result1mb
            })
        }
    }
}
const Kq = model('Kq', kqSchema);

export default Kq;

function smn(kq){
    let a=new Array()
    a[0]=new Array()
    a[1]=new Array()
    a[2]=new Array()
    a[3]=new Array()
    kq.map((v,i)=>{
        let b=v.substr(-2)            
        if(i<18){a[0].push(b)}
        if(17<i && i<36){a[1].push(b)}
        if(36<i && i<54){a[2].push(b)}
        if(54<i && i<72){a[3].push(b)}
    })
    return a
}

function smb(kq){
    let a=Array()
    kq.map((v,i)=>{
        let b=v.substr(-2)            
        a.push(b)
    })
    return a
}