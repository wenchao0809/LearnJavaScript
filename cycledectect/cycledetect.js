function cycleDetect(obj) {
  const map = new Map()
  return dectect(obj, map)
}

function detect(obj, map) {
  map.set(obj, true)
  const keys = Object.keys(obj)
  let result = false
  for (let key of keys) {
    if (result) {
      break
    }else if (map.get(obj[key])) {
      return true
    } else if (typeof obj[key] === 'object') {
      result = result || detect(obj[key], map)
      map.delete(obj[key]) 
    }
  }
  return result
}

a = {}
b = { a}
a.b = b
d = {}
c = { d, e: { d: b } }

// console.log(cycleDectect(a))
console.log(cycleDetect(d))
console.log(cycleDetect(c))