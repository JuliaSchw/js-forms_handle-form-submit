console.clear();

// select form
const form = document.querySelector('[data-js="form"]');

// add event listener: this is our helper function which reads all input data
// and puts it into a list (the list is not an array)

form.addEventListener("submit", (event) => {
  // the preventDefault() function helps to keep the data, without this function
  // the form an data automatically refreshes after submitting.
  event.preventDefault();

  // the new... function is taking the list and forms it into a usable object.
  // here we take our data and form it into an object with special properties.
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // to reset the form
  event.target.reset();
  // here we focus on the element "firstName". this means,
  // if we submit the form, we automatically jump to "firstName" again.
  // it allows us, to work faster, bc we dont have to click the first field again.
  event.target.elements.firstName.focus();
});
