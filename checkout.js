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
  
    // Add submit event listener
    submitButton.addEventListener('click', handleSubmit);
  }
  
  // Create the form handler
  createFormHandler();
  