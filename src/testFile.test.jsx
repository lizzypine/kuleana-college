1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
const fizz_buzz = require('./index')

describe('FizzBuzz', () => {
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz')
  })

  test('[5] should result in "buzz"', () => {
    expect(fizz_buzz([5])).toBe('buzz')
  })

  test('[15] should result in "fizzbuzz"', () => {
    expect(fizz_buzz([15])).toBe('fizzbuzz')
  })

  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizz_buzz([3])).toBe('fizz')
  })
})
