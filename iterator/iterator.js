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

//生成器
function *createIterator() {
  yield 1;
  yield 2;
  yield 3;
}
let iterator = createIterator();

//Symbol.iterator
let values = [1,2,3];
let iterator = values[Symbol.iterator]();

iterator.next();// {value:1, done:false}