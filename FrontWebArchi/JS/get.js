// Récupération de la liste des articles depuis la base de données
// Cela suppose que vous avez une liste d'articles avec des ID
const articles = [
    { id: 1, title: "Titre de l'article 1", description: "Description de l'article 1" },
    { id: 2, title: "Titre de l'article 2", description: "Description de l'article 2" },
    { id: 3, title: "Titre de l'article 3", description: "Description de l'article 3" },
    { id: 4, title: "Titre de l'article 4", description: "Description de l'article 4" },
    { id: 5, title: "Titre de l'article 5", description: "Description de l'article 5" },
    { id: 6, title: "Titre de l'article 6", description: "Description de l'article 6" },
  ];
if (articles.length >= 0) {
    // Cacher l'alerte si la liste des articles est vide
    var alert = document.querySelector('.js-alert');
    alert.classList.remove('alert--is-visible');
}
// Génération dynamique des éléments HTML pour chaque article
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

(function() {
	var alertClose = document.getElementsByClassName('js-alert__close-btn');
	if( alertClose.length > 0 ) {
		for( var i = 0; i < alertClose.length; i++) {
			(function(i){initAlertEvent(alertClose[i]);})(i);
		}
	};
}());

function initAlertEvent(element) {
	element.addEventListener('click', function(event){
		event.preventDefault();
		element.closest('.js-alert').classList.remove('alert--is-visible');
	});
};