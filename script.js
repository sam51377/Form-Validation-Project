// Get form and input elements
const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Add event listener to form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission behavior

    validateInputs(); // Validate form inputs
});

// Function to set error message for an input element
const setError = (element, message) => {
    const inputControl = element.parentElement; // Parent element of the input
    const errorDisplay = inputControl.querySelector('.error'); // Error display element

    errorDisplay.innerText = message; // Set error message text
    inputControl.classList.add('error'); // Add error class to input control
    inputControl.classList.remove('success'); // Remove success class from input control
}

// Function to set success style for an input element
const setSuccess = element => {
    const inputControl = element.parentElement; // Parent element of the input
    const errorDisplay = inputControl.querySelector('.error'); // Error display element

    errorDisplay.innerText = ''; // Clear error message
    inputControl.classList.add('success'); // Add success class to input control
    inputControl.classList.remove('error'); // Remove error class from input control
};

// Function to validate form inputs
const validateInputs = () => {
    // Get values of input fields
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Validate Full Name
    if(fullNameValue.length < 5) {
        setError(fullName, 'Name must be at least 5 characters');
    } else {
        setSuccess(fullName);
    }

    // Validate Email
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!emailValue.includes('@')) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // Validate Phone Number
    if(phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required');
    } else if (phoneNumberValue.length !== 10 || phoneNumberValue === '123456789') {
        setError(phoneNumber, 'Provide a valid 10-digit phone number');
    } else {
        setSuccess(phoneNumber);
    }

    // Validate Password
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === fullNameValue.toLowerCase()) {
        setError(password, 'Password must be at least 8 characters and not be a common word');
    } else {
        setSuccess(password);
    }

    // Validate Confirm Password
    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords don't match");
    } else {
        setSuccess(confirmPassword);
    }
};
