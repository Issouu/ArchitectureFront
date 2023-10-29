let Title = document.getElementById("Title");
let Description = document.getElementById("Description");
let Delete = document.getElementById("Delete");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(Title);
console.log(Description);

if (id) {
    (async () => {
        try {
            const response = await fetch(`/articles/${id}`);
            const data = await response.json();
            console.log(data);

            // Mettre à jour les champs avec les données récupérées
            Title.innerHTML = data.article.title;
            Description.innerHTML = data.article.content;
        } catch (err) {
            console.error(err);
        }
    })();
} else {
    console.error('ID non trouvé dans l\'URL');
}

Delete.addEventListener("click", function (event) {
    (async () => {
        try {
            const response = await fetch(`/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            if (data.message)
            {
                window.location.href = "/";
            }
        } catch (err) {
            console.error(err);
        }
    })();
});