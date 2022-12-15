
//login
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};
//new user
const newUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong.')
        }
    }
    
};
//logout
const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};

//post
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const postText = document.querySelector('#new-post-body').value.trim();
    const postType = document.querySelector('#new-post-subject').value.trim().toLowerCase();
    const genreName = document.querySelector('#new-post-genre').value.trim();

    if (title && postText && genreName) {
        const response = await fetch('/new-submission', {
            method: 'POST',
            body: JSON.stringify({ title, postText, postType, genreName }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace(`/`);
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const newComment = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#new-comment').value.trim();
    const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    if (body) {
        const response = await fetch(`/submissions/${currentPostUrlID}`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

const deletePost = async (event) => {
    event.preventDefault();

    if (confirm('Are you sure you want to delete this post? This cannot be undone!')) {
        const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong.');
        }
    };
};

const searchByTitle = async (event) => {
    event.preventDefault();

    const searchTitle = document.querySelector('#search-title').value.trim();

    const response = await fetch('/search', {
        method: 'POST',
        body: JSON.stringify({ searchTitle }),
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json()).then((data => {
        console.log(data);
        if(data.length) {
            document.location.replace(`/submissions/${data[0].id}`)
        } else {
            alert('No posts found with that title!')
        }
    }))

    // if (!response.ok) {
    //     alert('No posts found with that title!')
    // }
};

const searchByGenre = async (event) => {
    event.preventDefault();

    const searchGenre = document.querySelector('#genre-search-query').value.trim();

    if (searchGenre != 'Select Genre') {
        document.location.replace(`submissions/by-genre/${searchGenre}`);
    }
    
}

if (document.querySelector('#login-button')) {
    document
        .querySelector('#login-button')
        .addEventListener('click', loginFormHandler);
};

if (document.querySelector('#register-button')) {
    document
        .querySelector('#register-button')
        .addEventListener('click', newUser);
};

if (document.querySelector('#logout-button')) {
    document
        .querySelector('#logout-button')
        .addEventListener('click', logout);
};

if (document.querySelector('#title-search-button')) {
    document
        .querySelector('#title-search-button')
        .addEventListener('click', searchByTitle);
}

if (document.querySelector('#genre-search-button')) {
    document
        .querySelector('#genre-search-button')
        .addEventListener('click', searchByGenre);
};

if (document.querySelector('#new-post-button')) {
    document
        .querySelector('#new-post-button')
        .addEventListener('click', newPost);
};

if (document.querySelector('#new-comment-button')) {
    document
        .querySelector('#new-comment-button')
        .addEventListener('click', newComment);
}
if (document.querySelector('#user-delete-button')) {
    document
        .querySelector('#user-delete-button')
        .addEventListener('click', deletePost);
}