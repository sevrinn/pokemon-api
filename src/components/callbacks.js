const fs = require("fs");
const { resolve } = require("path");
const path = require("path");
const filePath = path.join(__dirname, "example.txt");

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.log("INSIDE ERROR CASE");
    console.log(error);
  } else {
    console.log(data);
  }
});

// const addXY = (x, y, callback) => {
//   const n =  x + y;
//   callback(n);
// }
// addXY(2, 2, (n1)=> {
//   console.log("n1 is", n1);
//   addXY(n1, 2, (n2)=> {
//     console.log("n2 is", n2);
//     addXY(n2, 2, (n3) => {
//       console.log("n3 is", n3);
//       addXY(n3, 2, (n4) => {
//         console.log("n4 is", n4)
//       })
//     })
//   })
// });

// a promise is a function(like obj) that will represent
//the completion or failure of whatever you're trying to do

//very very basic promise
const firstPromise = new Promise((resolve, reject) => {
  if (2 === 2) {
    console.log("inside success case");
    resolve("Success!")
  } else {
    console.log("inside failure case");
    reject("Failure!");
  }
});

firstPromise
  .then(result => console.log(result))
  .catch((err)=> console.log(err))


//Turn this callback hell into a Promise
  // const addXY = (x, y, callback) => {
  //   const n =  x + y;
  //   callback(n);
  // }
  // addXY(2, 2, (n1)=> {
  //   console.log("n1 is", n1);
  //   addXY(n1, 2, (n2)=> {
  //     console.log("n2 is", n2);
  //     addXY(n2, 2, (n3) => {
  //       console.log("n3 is", n3);
  //       
  //       })
  //     })
  //   })
  // });

  const addXYPromise = (x, y) => {
    return new Promise((resolve, reject) => {
      resolve(x+y);
    });
  };

  addXYPromise(2, 2)
    .then((result1) => {
       addXYPromise(result1, 2).then((result2) => {
         addXYPromise(result2, 2).then((result3) => {
          addXYPromise(result3, 2).then((result4) => 
          console.log("end of the line", result4)
          )});
      });
    })
    .catch((err) => console.log(err));
  