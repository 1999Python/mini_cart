// Factory function to create a form handler
function createFormHandler() {
    const form = document.querySelector('.form');
    const fullNameInput = document.getElementById('delivery_address');
    const cityInput = document.getElementById('delivery_city');
    const submitButton = document.querySelector('.submit_btn');
  
    // Regular expression to validate name and city
    const nameAndCityRegex = /^[A-Za-z\s]+$/;
  
    // Function to check if all inputs are filled
    function isFormValid() {
      return fullNameInput.value.trim() !== '' &&
             cityInput.value.trim() !== '';
    }
  
    // Function to show a popup message
    function showPopup(message) {
      alert(message);
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
  
      if (!isFormValid()) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const fullName = fullNameInput.value.trim();
      const city = cityInput.value.trim();
  
      if (!nameAndCityRegex.test(fullName) || !nameAndCityRegex.test(city)) {
        alert('Please enter a valid name and city without numbers or symbols.');
        return;
      }
  
      showPopup('Your delivery details have been submitted. Proceed with payment.');
      form.reset();
    }
  
    submitButton.addEventListener('click', handleSubmit);
  }
  
  createFormHandler();
  


/////////
  /////
  //////

 // Factory function to create a form handler with alert messages
 function createFormWithAlerts() {
    const form = document.querySelector('.form');
    const fullNameInput = document.querySelector('#password_field[name="input-name"]');
    const cardNumberInput = document.querySelector('#password_field[type="number"]');
    const expiryDateInput = document.querySelector('.input_field[title="Expiry Date"]');
    const cvvInput = document.querySelector('.input_field[title="CVV"]');
    const submitButton = document.querySelector('.purchase--btn');

    // Function to show an alert message
    function showAlert(message) {
        alert(message);
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        if (fullNameInput.value.trim() === '' || cardNumberInput.value.trim() === '' || expiryDateInput.value.trim() === '' || cvvInput.value.trim() === '') {
            showAlert('Please fill in all required fields.');
            return;
        }


        showAlert('Payment successful!');
        form.reset();
    }

    
    submitButton.addEventListener('click', handleSubmit);
}
createFormWithAlerts();
