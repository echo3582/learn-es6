//迭代器
function createIterator(items) {
  let i = 0;
  return {
    next: function() {
      done = i > items.length-1;
      value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value
      }
    }
  }
}
let iterator = createIterator([1,2,3]);