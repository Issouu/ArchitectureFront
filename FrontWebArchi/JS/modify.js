let Title = document.getElementById("input-name");
let Description = document.getElementById("textarea");
let Modify = document.getElementById("modify");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


if (id) {
    (async () => {
        try {
            const response = await fetch(`/articles/${id}`);
            const data = await response.json();
            console.log(data);

            // Mettre à jour les champs avec les données récupérées
            Title.value = data.article.title;
            Description.value = data.article.content;
        } catch (err) {
            console.error(err);
        }
    })();
} else {
    console.error('ID non trouvé dans l\'URL');
}

Modify.addEventListener("click", function (event) {
    (async () => {
        try {
            const response = await fetch(`/articles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: Title.value,
                    content: Description.value
                })
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