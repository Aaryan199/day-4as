//Given data
const student= {
  name: 'Helsinki',
  age:24,
  projects:{
     dicegame:'Two player dice game using JavaScript'}
};
// Destructure
const{name,age,projects:{dicegame}}=student
console.log(name,age,dicegame)
