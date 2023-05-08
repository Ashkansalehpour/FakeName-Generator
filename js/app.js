function API(link) {
    return ( new Promise((resolve, reject) => {
      // Creating XHR object
      let xhr = new XMLHttpRequest();

      // open Xhr
      xhr.open("GET", link, true);

      // Xhr load
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Not Found !?");
        }
      };
      //Send XHR
      xhr.send();
    })
    )
  }

API();

console.log(API("https://api.namefake.com/english-states/male").then(
  (response)=>{console.log(response);}
));
