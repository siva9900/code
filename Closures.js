function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log("Counter:", counter);
  }
}

const counter = outer();

counter()
counter()
counter()
counter()
counter()
counter()
counter()

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i); // 1, 2, 3 (closure remembers `i`)
    }, i * 1000);
  }