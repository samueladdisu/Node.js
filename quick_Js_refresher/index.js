// Arrays

// const hobbies = ['sports', 'Cooking'];

// for( let hobby of hobbies){
//   // console.log(hobby);
// }

// Array methods

// console.log("old array", hobbies);
// console.log("new array", hobbies.map(hobby => 'Hobby: ' + hobby));


// Aysc and Promise




// promise

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
     resolve('Done!')
    }, 1500);
  })

  return promise
}

setTimeout(() => {
  console.log("Timer is Done");
  fetchData().then(text =>{
    console.log(text);
    return fetchData()
  }).then(text2 =>{
    console.log(text2);
  })
}, 2000)


console.log('Hello');
console.log('Hi');