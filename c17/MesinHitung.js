class MesinHitung{
    constructor(){
        this.x = 1;
    }
    add(Num){
        this.x += Num;
        return this;
    }
    subtract(Num){
        this.x -= Num;
        return this;
    }
    divide(Num){
        this.x = this.x / Num;
        return this;
    }
    multiply(Num){
        this.x *= Num;
        return this;
    }
    square(){
        this.x **=2;
        return this;
    }
    exponent(Num){
        this.x **= Num;
        return this;
    }
    squareRoot(){111
        this.x = Math.sqrt(this.x,2);
        return this;
    }
    result(){
        console.log(this.x);
    }
}
export default MesinHitung;