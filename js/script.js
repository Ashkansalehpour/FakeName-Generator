// selectors
// gender selector
const genderSelector = document.getElementById("gender-selector");
  // button selector
  const generatorBtn = document.getElementById("generate-btn");
  // container selector
  const container = document.querySelector(".container");
  // body selector
  const body = document.body;
// Events

// creating event for button to create fakeName after click

generatorBtn.addEventListener("click", desireGender);
// appear fakeName for our desire gender

function desireGender(){
    // user selector
    let userGender = genderSelector.value;

    // Conditions 
    if (!(userGender === "select")) {
        if (userGender === "male") {
          API("https://api.namefake.com/english-states/male").then((response) => {
            body.innerHTML = appearFakeName(response, userGender);
          });
        } else {
          API("https://api.namefake.com/english-states/female").then((response) => {
            body.innerHTML = appearFakeName(response, userGender);
          });
        }
    
        // Container alert when its empty
        container.style.display = "none";
      } else {
        alert("Please Select Your Gender!!!!");
      }
    }

// result page

function appearFakeName(response, userGender) {
    return `
      <div class="result">
        <div class="title">
          <h2>Hear your fake profile :</h2>
        </div>
        <div id="fakeName">
          <div class="fakeName">Name : <span>${response.name}</span></div>
          <div class="fakeName">Age : <span>${response.bonus}</span></div>
          <div class="fakeName">Gender : <span>${userGender}</span></div>
          <div class="fakeName>Birthday : <span>${response.birth_data}</span></div>
          <div class="fakeName">address : <span>${response.address}</span></div>
          <div class="fakeName">Phone number : <span>${response.phone_h}</span></div>
        </div>
      </div>
    `;
  }
  