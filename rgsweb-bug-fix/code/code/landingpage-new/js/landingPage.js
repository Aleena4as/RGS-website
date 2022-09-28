const toggleForm = () => {
  let popupParent = document.querySelector(".form-popup");
//   let form_state = document.querySelector(".step");
//   if (form_state.classList.contains("step-two")) {
//     form_state.classList.remove("step-two");
//   }
  popupParent.classList.toggle("closed");
};
