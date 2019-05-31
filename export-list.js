var arr = [];

var sorts = function(arr) {
  return arr.sort((a,b) => a-b);
}

module.exports = {
  list: function(value) {
    arr.push(value);
    return arr;
  },
  sorted: function() {
    return sorts(arr);
  }
}


// console.log(module.export.list(5));
// console.log(module.export.list(2));
// console.log(module.export.list(10));
// console.log(module.export.list(24));
// console.log(module.export.list(1));
// console.log(module.export.sorted());