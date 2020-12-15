/**
 * 验证结论
 * super作为函数调用时，代表父类的构造函数
 * super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 * 在 JavaScript高级编程第四版中有说super 只能在派生类构造函数和静态方法中使用。
 */
class Super {
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
    console.log(super.log('test super on class'))
  }
  testSuperOnInstance() {
    console.log(super.test('test suepr on instance'))
  }
}
Sub.testSuperOnClass()
const sub = new Sub()
sub.testSuperOnInstance()
