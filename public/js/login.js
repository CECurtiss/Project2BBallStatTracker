const login = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', 
        {
            method: POST,
            body: JSON.stringify({ username, password}),
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.message);
        }
    }
};

document.querySelector('#login').addEventListener('click', login)