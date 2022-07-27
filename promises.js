pro = () => {
    const myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function(){ myResolve("Hello!!! I am Peter and I love JavaScript !!!"); }, 3000);
      });
      
      myPromise.then(function(value) {
        document.getElementById("demo").innerHTML = value;
      });
}

pro();


// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
  
//   makeServerRequest.catch(error => {
//     console.log(error);
//   })






