function multiple(a){

    return function(b){
        return a*b;
    }
}

const double = multiple(2);
const triple = multiple(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(10)); // 20
console.log(triple(10)); // 30


const add5 = x => x + 5;
const multiply2 = x => x * 2;

function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

const add5AfterMultiply2 = compose(add5, multiply2);

console.log(add5AfterMultiply2(10)); 