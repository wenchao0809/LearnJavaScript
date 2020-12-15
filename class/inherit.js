/**
 * 验证结论
 * super作为函数调用时，代表父类的构造函数
 * super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 * 在 JavaScript高级编程第四版中有说super 只能在派生类构造函数和静态方法中使用。
 */
class Super {
  x = 1
  static log(msg) {
    console.log('message', msg)
  }
  test(msg) {
    console.log('test message', msg)
  }
}

class Sub extends Super {
  constructor() {
    super()
  }
  static testSuperOnClass() {
    super.log('test super on class')
  }
  testSuperOnInstance() {
    super.test('test suepr on instance')
  }
}


Sub.testSuperOnClass()
const superInstance = new Super()
const sub = new Sub()
sub.testSuperOnInstance()
/**
 * ES6的继承链有两条
 * 一个是静态属性的继承也就是以父类自身为原型创建父类
 * 二是原型继承也就是Sub.prototype = Object.create(Super.prototype)
 * 另外还有一条隐藏的继承链是通过super()实现实例属性的继承的
 * 所以得出结论ES6的继承只不过是之前组合继承的语法糖
 */
console.log(Sub.__proto__ === Super)
console.log(sub.__proto__ === Sub.prototype)
// 也就是Sub.prototype = Object.create(Super.prototype)
console.log(Sub.prototype.__proto__ === Super.prototype)
console.log(sub.hasOwnProperty('x'))
// 方法存在于原型上
console.log(sub.hasOwnProperty('testSuperOnInstance'))