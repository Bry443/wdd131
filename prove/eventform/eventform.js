
const form = document.querySelector("#eventTicket");
const userType = document.querySelector("#userType");
const studentIContainer = document.querySelector("#studentIContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const studentI = document.querySelector("#studentI");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

function updatePasswordField() {
  const value = userType.value;
  console.log("running updatePasswordField", value);
  // Show the travel notes on the form if they are choosing many campuses and require it
  if (value === "student") {
    studentIContainer.hidden = false;
    accessCodeContainer.hidden = true;
    studentI.required = true;
    accessCode.required = false;  
  } 
  else if (value === "guest") {
    console.log("running updatePasswordField guest", value);
    accessCodeContainer.hidden = false;
    studentIContainer.hidden = true;
    studentI.required = false;
    accessCode.required = true;  
  } 
  else {
    console.log("running updatePasswordField else", value);
    studentIContainer.hidden = true;
    accessCodeContainer.hidden = true;
    studentI.required = false;
    accessCode.required = false;
  }
}

userType.addEventListener("change", updatePasswordField);
updatePasswordField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.userType.value;
  const availableDate = form.availableDate.value;
  const inumber = form.studentI.value.trim();
  const code = form.accessCode.value.trim();

  // Validate the input
  console.log("running form submit", type, inumber, code);
  // incorrect student I#
  if (type === "student" && inumber.length !== 9) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  if (type === "guest" && code !== "EVENT131") {
    output.textContent = "Incorrect access code";
    console.log("entered incorrect guest");
    return;
  }

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
  updatePasswordField();
});
          