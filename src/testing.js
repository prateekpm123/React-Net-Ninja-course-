array = [1, 2,3,5,6 ]

const evenOdd = (...arr) => {
  arr.map((el) => {
    if (el%2==0) {
      console.log("el is",el)
      console.log(true)
    } else {
      console.log(false)
    }
  })
}

evenOdd(array)
