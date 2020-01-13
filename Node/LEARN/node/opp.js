class box{
    constructor(a) {
        this.a=a;
        this.b=this.a[47][1];
    }
    p(){
        return this.a;
    }
    o(){
        return this.b;
    }
}

o={
    47:{
        1:"1111",
        2:"2222"
    },
    n:"hai"
}
a=new box(o);
console.log(a.o())