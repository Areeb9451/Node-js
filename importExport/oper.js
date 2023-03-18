const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
    return a - b;
  };
  

  const mul = (a, b) => {
    return a * b;
  };
const name = 'Areeb';
// Note all the file in node js is module itself. But the methods and vriable in the files are private and can'nt be accessed by to another file.
// In order to export this function;


//module.exports.add = add;
//module.exports.sub = sub;
//module.exports.mul = mul;
     // OR

module.exports = {add, sub, mul, name};
//module.exports = name;