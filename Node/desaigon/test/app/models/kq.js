const mongoose=require('mongoose')

const kqSchema = new mongoose.Schema({
    name:Number,
    kq:String,
    time:Date,
    ve: { type: mongoose.Schema.Types.ObjectId, ref: 'Ve' },
});

const Kq = mongoose.model('Kq', kqSchema);

module.exports=Kq;