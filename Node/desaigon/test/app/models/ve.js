const mongoose=require('mongoose')

const veSchema = new mongoose.Schema({
  tentinh:{type:Number,required:true},
  tencuoc:{type:Number,required:true},
  matinh:{type:Array,required:true},
  so:{type:String,required:true,validate(value){
    let b=true
    let a=/\d{2}/g
    ar=value.match(a)
    for(let i=0;i<ar.length;i++){
      let j=1
      while(j<ar.length){
        if(ar[i]==ar[i+j]){
          b=false
        }
        j++
      }
    }
    return b
  }},
  tiencuoc:{type:Number,required:true,validate(value){return value>=1000}},
  tongcuoc:{type:Number,required:true},
  time:{type:Number,required:true},
  winloss:Number,
  tilewin:{type:Number,required:true},
  tienwin:Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});


const Ve = mongoose.model('Ve', veSchema);

module.exports=Ve;

