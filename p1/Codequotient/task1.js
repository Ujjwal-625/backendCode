function sum(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log(a-b);
}
function Multiply(a,b){
    return a*b;
}
function Divide(a,b){
    return a/b;
}
// console.log(odule.exports);
module.exports.sum=sum;
module.exports.Sub=subtract;
module.exports.Multiply=Multiply;
module.exports.Divide=Divide;