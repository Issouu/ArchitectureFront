let articles = [];

(async () => {
    try {
        const response = await fetch('/articles');
        const data = await response.json();
        articles = data.articles;

        if (articles.length > 0) {
            // Cacher l'alerte si la liste des articles est vide
            const alert = document.querySelector('.js-alert');
            alert.classList.remove('alert--is-visible');
        }

        const articlesList = document.getElementById("articles-list");

        articles.forEach(article => {
            const listItem = document.createElement("li");
            listItem.className = "article";

            const articleInfo = document.createElement("div");
            articleInfo.className = "article-info";

            const articleImage = document.createElement("img");
            articleImage.className = "cd-block cd-width-100%";
            articleImage.src = "img1.jpg";
            articleImage.alt = "placeholder";

            articleInfo.appendChild(articleImage);
            listItem.appendChild(articleInfo);

            const articleTitle = document.createElement("span");
            articleTitle.className = "article-title";
            articleTitle.textContent = article.title;
            listItem.appendChild(articleTitle);

            const articleActions = document.createElement("div");
            articleActions.className = "article-actions";

            const modifyButton = document.createElement("button");
            modifyButton.className = "btn-primary";
            modifyButton.textContent = "Modifier";
            modifyButton.addEventListener("click", () => {
                window.location.href = `/modify?id=${article.id}`;
            });
            articleActions.appendChild(modifyButton);

            const deleteButton = document.createElement("button");
            deleteButton.className = "btn-primary";
            deleteButton.textContent = "Supprimer";
            deleteButton.addEventListener("click", () => {
                window.location.href = `/delete?id=${article.id}`;
            });
            articleActions.appendChild(deleteButton);

            listItem.appendChild(articleActions);
            articlesList.appendChild(listItem);
        });

        const alertClose = document.querySelectorAll('.js-alert__close-btn');
        if (alertClose.length > 0) {
            alertClose.forEach(element => {
                element.addEventListener('click', event => {
                    event.preventDefault();
                    element.closest('.js-alert').classList.remove('alert--is-visible');
                });
            });
        }
    } catch (err) {
        console.error(err);
    }
})();