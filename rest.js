let placeholder = document.getElementById('placeholder');
let allPostsBut = document.getElementById('get-all-posts-button');
let post10But = document.getElementById('get-id10-button');
let createNewBut = document.getElementById('create-new-post-button');
let replace12But = document.getElementById('replace-post12-button');
let update12But = document.getElementById('update-post12-button');
let delete12But = document.getElementById('delete-post12-button');


// Get all posts function
async function getPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred:", error);
      }
}

// Event listener to run get all posts function and update html
allPostsBut.addEventListener("click", () => {getPosts().then(posts => {
    // Clear any existing content
    placeholder.innerHTML = '';

    // Iterate over the posts and create HTML elements for each one
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <p>userId: ${post.userId}</p>
            <p>id: ${post.id}</p>
            <p>title: ${post.title}</p> 
            <p>body: ${post.body}</p>
        `;
        placeholder.appendChild(postElement);
        });
    });
});


// Get post with id of 10
async function post10(){
    try { const response = await fetch('https://jsonplaceholder.typicode.com/posts?id=10');
    const data = await response.json();
    return data;
    } catch (error) {
        console.error("An error occurred:", error);
      }
}

// Event listener to run get all posts function and update html
post10But.addEventListener("click", () => {post10().then(posts => {
    // Clear any existing content
    placeholder.innerHTML = '';

    // Iterate over the result posts and create HTML elements for each one
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <p>userId: ${post.userId}</p>
            <p>id: ${post.id}</p>
            <p>title: ${post.title}</p> 
            <p>body: ${post.body}</p>
        `;
        placeholder.appendChild(postElement);
        });
    });
});



// Create a new post and log the id generated for it by the server
async function newPost(){
    try {const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    const data = await response.json();
    return data
} catch (error) {
    console.error("An error occurred:", error);
  }

}

// Event listener to run get all posts function and update html
createNewBut.addEventListener("click", () => {
    newPost()
        .then(post => {
            // Clear any existing content
            placeholder.innerHTML = '';

            // Create HTML elements for the post
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <p>userId: ${post.userId}</p>
                <p>id: ${post.id}</p>
                <p>title: ${post.title}</p> 
                <p>body: ${post.body}</p>
            `;
            placeholder.appendChild(postElement);
        })
    });


// Replace the post with id of 12 and render the responseJSON
async function replace12(){
    try {const response = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        id: 12,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    const data = await response.json();
    return data
    }catch (error) {
    console.error("An error occurred:", error);
  }
}

// Event listener to replace 12
replace12But.addEventListener("click", () => {
    replace12()
        .then(post => {
            // Clear any existing content
            placeholder.innerHTML = '';

            // Create HTML elements for the post
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <p>userId: ${post.userId}</p>
                <p>id: ${post.id}</p>
                <p>title: ${post.title}</p> 
                <p>body: ${post.body}</p>
            `;
            placeholder.appendChild(postElement);
        })
    });


// Update the title of post with id of 12 and render responseJSON
async function update12() {
    try {const response = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'new foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    const data = await response.json()
    return data
    } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Event listener to update 12
update12But.addEventListener("click", () => {
    update12()
        .then(post => {
            // Clear any existing content
            placeholder.innerHTML = '';

            // Create HTML elements for the post
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <p>userId: ${post.userId}</p>
                <p>id: ${post.id}</p>
                <p>title: ${post.title}</p> 
                <p>body: ${post.body}</p>
            `;
            placeholder.appendChild(postElement);
        })
    });


// Delete the post with id of 12 and render a success message
async function delete12() {
   try {const response = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE',
  })
  const data = 'post 12 has been deleted';
  return data;
    } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Event listener to delete 12
delete12But.addEventListener("click", () => {
    delete12()
        .then(post => {
            // Clear any existing content
            placeholder.innerHTML = '';

            // Create HTML elements for the post
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <p>${post}</p>
            `;
            placeholder.appendChild(postElement);
        })
    });