function intersection(...args) {
  if (args.length === 1) return args[0]
  if (args.length == 2) return [...new Set(args[0].filter(item => args[1].indexOf(item) !== -1))]
  const mid = Math.floor(args.length / 2)
  const left = intersection.apply(null, args.slice(0, mid))
  const right = intersection.apply(null, args.slice(mid))
  return intersection.apply(null, [left, right])
}

console.log(intersection([1, 1, 1, 1, 1, 2, 9, 3], [43, 1, 3, 8, 2], [3, 3, 3, , 1, 2, 4, 1, 2]))
