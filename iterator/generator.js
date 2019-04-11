//生成器
function *createIterator(items) {
  for(let item of items) {
    yield item;
  }
}
let iter = createIterator([1,2,3]);