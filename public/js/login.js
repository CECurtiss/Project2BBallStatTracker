const login = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    
    if (username && password) {
        const response = await fetch('/api/users/login', 
        {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/api/gamestats');
        } else {
            alert('Failed to login');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('./api/gamestats');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

document.querySelector('#login').addEventListener('click', login)
document.querySelector('#signup-form').addEventListener('click', signupFormHandler);