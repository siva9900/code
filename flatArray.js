const flatArray = (arr) => {
  let result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flatArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(flatArray([1, 2, [3, 4], [5, [6, 7]], 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};






const counter = (num) => {

const [count, setcount] = useState(num);


const increment = () => {
  setcount(count + 1);
}

}
