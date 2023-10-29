let createButton = document.getElementById("createButton");

createButton.addEventListener("click", function (event) {
    event.preventDefault();
    const nameInputValue = document.getElementById('input-name').value;
    const descriptionTextareaValue = document.getElementById('textarea').value;


    (async () => {
        try{
            const response = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: nameInputValue,
                    content: descriptionTextareaValue
                })
            });
            const data = await response.json();
            if (data.articleId) {
                window.location.href = `/`;
            }
        }
        catch (err) {
            console.error(err);
        }
    })();
});