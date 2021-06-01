

const { co } = require('./co')

function run(fn) {
  var gen = fn();

  function next(data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value.then(next, error);
  }
  function error(e) {
    throwError(e)
  }
  function throwError(e) {
    throw e
  }

  next();
}

function* fn() {
  let a = yield Promise.resolve(1)
  console.log(a)
  let b = yield Promise.resolve(2)
  console.log(b)
  let c = yield Promise.resolve(3)
  console.log(c)
  console.log(a, b, c)
  return 10
}
try {
  co(fn)
    .then(res => console.log(res))
} catch (error) {
  console.log(error)
}
