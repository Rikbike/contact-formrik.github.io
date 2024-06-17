const form = document.querySelector("form");
const fNameInput = document.querySelector(".f-name input");
const fNameError = document.querySelector(".f-name .error-text");
const lNameInput = document.querySelector(".l-name input");
const lNameError = document.querySelector(".l-name .error-text");
const emailInput = document.querySelector(".email input");
const emailError = document.querySelector(".email .error-text");
const messageInput = document.querySelector(".message textarea");
const messageError = document.querySelector(".message-container .error-text");
const radios = [...document.querySelectorAll(".query-inputs input")];
const queryError = document.querySelector(".query-container .error-text");
const consentError = document.querySelector(".consent-error-text");
const consentCheckbox = document.querySelector("#checkbox");
const successMessage = document.querySelector(".success-msg");
const submitBtn = document.getElementById("submit-btn");

let atLeastOneChecked = false;

const checkInputs = (input, error) => {
  if (input.value.trim() === "") {
    error.classList.add("active");
    input.style.borderColor = "red";
    return false;
  } else {
    error.classList.remove("active");
    input.style.borderColor = "hsl(186, 15%, 59%)";
    return true;
  }
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const checkEmail = () => {
  const email = emailInput.value.trim();
  if (email === "" || !isValidEmail(email)) {
    emailError.classList.add("active");
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailError.classList.remove("active");
    emailInput.style.borderColor = "hsl(186, 15%, 59%)";
    return true;
  }
};

const checkQuery = () => {
  atLeastOneChecked = radios.some((radio) => radio.checked);

  if (!atLeastOneChecked) {
    queryError.classList.add("active");
    return false;
  } else {
    queryError.classList.remove("active");
    return true;
  }
};

const checkCheckBox = () => {
  if (!consentCheckbox.checked) {
    consentError.classList.add("active");
    return false;
  } else {
    consentError.classList.remove("active");
    return true;
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const fNameValid = checkInputs(fNameInput, fNameError);
  const lNameValid = checkInputs(lNameInput, lNameError);
  const emailValid = checkEmail();
  const radioValid = checkQuery();
  const textAreaValid = checkInputs(messageInput, messageError);
  const checkboxValid = checkCheckBox();

  if (
    fNameValid &&
    lNameValid &&
    emailValid &&
    radioValid &&
    textAreaValid &&
    checkboxValid
  ) {
    successMessage.classList.add("active");
    document.querySelector(".success-msg").scrollIntoView({ behavior: "smooth" });
  }
});
