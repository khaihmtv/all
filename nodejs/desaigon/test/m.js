
function ketqua(){
  let aaaa=Math.floor(Math.random()*100)
  let aaa=Math.floor(Math.random()*100)
  let aa=Math.floor(Math.random()*100)
  let a=Math.floor(Math.random()*100)

  let a1=Math.floor(Math.random()*100)
  let a2=Math.floor(Math.random()*100)
  let a3=Math.floor(Math.random()*100)
  let a4=Math.floor(Math.random()*100)
  let a5=Math.floor(Math.random()*100)
  let a6=Math.floor(Math.random()*100)
  let a7=Math.floor(Math.random()*100)
  let a8=Math.floor(Math.random()*100)
  let a9=Math.floor(Math.random()*100)
  let a10=Math.floor(Math.random()*100)
  let a11=Math.floor(Math.random()*100)
  let a12=Math.floor(Math.random()*100)
  let a13=Math.floor(Math.random()*100)
  let a14=Math.floor(Math.random()*100)
  let a15=Math.floor(Math.random()*100)
  let a16=Math.floor(Math.random()*100)
  let a17=Math.floor(Math.random()*100)
  let a18=Math.floor(Math.random()*100)

  let da1=Math.floor(Math.random()*100)
  let da2=Math.floor(Math.random()*100)
  let da3=Math.floor(Math.random()*100)
  let da4=Math.floor(Math.random()*100)
  let da5=Math.floor(Math.random()*100)
  let da6=Math.floor(Math.random()*100)
  let da7=Math.floor(Math.random()*100)
  let da8=Math.floor(Math.random()*100)
  let da9=Math.floor(Math.random()*100)
  let da10=Math.floor(Math.random()*100)
  let da11=Math.floor(Math.random()*100)
  let da12=Math.floor(Math.random()*100)
  let da13=Math.floor(Math.random()*100)
  let da14=Math.floor(Math.random()*100)
  let da15=Math.floor(Math.random()*100)
  let da16=Math.floor(Math.random()*100)
  let da17=Math.floor(Math.random()*100)
  let da18=Math.floor(Math.random()*100)

  let ba1=Math.floor(Math.random()*100)
  let ba2=Math.floor(Math.random()*100)
  let ba3=Math.floor(Math.random()*100)
  let ba4=Math.floor(Math.random()*100)
  let ba5=Math.floor(Math.random()*100)
  let ba6=Math.floor(Math.random()*100)
  let ba7=Math.floor(Math.random()*100)
  let ba8=Math.floor(Math.random()*100)
  let ba9=Math.floor(Math.random()*100)
  let ba10=Math.floor(Math.random()*100)
  let ba11=Math.floor(Math.random()*100)
  let ba12=Math.floor(Math.random()*100)
  let ba13=Math.floor(Math.random()*100)
  let ba14=Math.floor(Math.random()*100)
  let ba15=Math.floor(Math.random()*100)
  let ba16=Math.floor(Math.random()*100)
  let ba17=Math.floor(Math.random()*100)
  let ba18=Math.floor(Math.random()*100)

  let ca1=Math.floor(Math.random()*100)
  let ca2=Math.floor(Math.random()*100)
  let ca3=Math.floor(Math.random()*100)
  let ca4=Math.floor(Math.random()*100)
  let ca5=Math.floor(Math.random()*100)
  let ca6=Math.floor(Math.random()*100)
  let ca7=Math.floor(Math.random()*100)
  let ca8=Math.floor(Math.random()*100)
  let ca9=Math.floor(Math.random()*100)
  let ca10=Math.floor(Math.random()*100)
  let ca11=Math.floor(Math.random()*100)
  let ca12=Math.floor(Math.random()*100)
  let ca13=Math.floor(Math.random()*100)
  let ca14=Math.floor(Math.random()*100)
  let ca15=Math.floor(Math.random()*100)
  let ca16=Math.floor(Math.random()*100)
  let ca17=Math.floor(Math.random()*100)
  let ca18=Math.floor(Math.random()*100)

  let arr=[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,
    ba1,ba2,ba3,ba4,ba5,ba6,ba7,ba8,ba9,ba10,ba11,ba12,ba13,ba14,ba15,ba16,ba17,ba18,
    ca1,ca2,ca3,ca4,ca5,ca6,ca7,ca8,ca9,ca10,ca11,ca12,ca13,ca14,ca15,ca16,ca17,ca18,
    da1,da2,da3,da4,da5,da6,da7,da8,da9,da10,da11,da12,da13,da14,da15,da16,da17,da18
  ]
  let c=0;
  let d=0;
  let e=0;
  let f=0;
  let i=0;
  let t=0;
  let dai=1
  for(i=0;i<18*dai;i++){
    if(a==arr[i]){c=c+1} 
    if(aa==arr[i]){d=d+1}
    if(aaa==arr[i]){e=e+1}
    if(aaaa==arr[i]){f=f+1}
  }
 if(c>0 && d>0 && e >0/* && f>0*/){
  return (c+d+e)/3
 }
  return 0
}

let tong=0;
let a=0;
while(a<1000000){
  let b=ketqua()
  tong=tong+b
  a++
}
console.log(tong)

let tinh=tong/1000000
console.log(tinh)

