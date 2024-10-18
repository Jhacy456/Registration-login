// select form by id
const loginForm = document.querySelector('#login-form');
console.log(loginForm);
// Handle from submit event
loginForm.addEventListener('submit', function(event){
event.preventDefault();
    // colect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'), 
        formData.get('password')
    );
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account logged in successfuly!'
});