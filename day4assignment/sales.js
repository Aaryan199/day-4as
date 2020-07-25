// console.log('hello')
let commission=0
let sale=prompt("How much worth did u sell?")
if (sale<=5000){
  x = commission + ((sale/100)*2)
  // console.log(x)
}
else if (sale>=5001 && sale<=10000){
  y=commission + ((sale/100)*5)
  x=commission + ((sale/100)*2)
  console.log(x+y)
}
else if (sale>=10001 && sale<=20000){
  y=commission + ((sale/100)*5)
  x=commission + ((sale/100)*2)
  z=commission + ((sale/100)*7)
  console.log(x+y+z)
}
else if (sale>20000){
  y=commission + ((sale/100)*5)
  x=commission + ((sale/100)*2)
  z=commission + ((sale/100)*7)
  u=commission + ((sale/100)*10)
  console.log(x+y+z+u)
}
