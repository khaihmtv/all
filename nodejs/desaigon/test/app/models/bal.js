const mongoose=require('mongoose')

const kqSchema = new mongoose.Schema({
    bal:{type:Number,validate(v){
        return v>0
    }},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Kq = mongoose.model('Kq', kqSchema);

module.exports=Kq;