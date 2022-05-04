document.querySelector("btn").addEventListener("click", getapi);


function getapi() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
        return response.json();
    }).then(function(posts) {
        let ulli = "<ul>";

        posts.forEach(function(post) {
            ulli += `<li>User adi: ${post.title}</li>`;
        })

        document.getElementById("ulli").innerHTML += ulli;

    });
}