let input_name = document.getElementById("input-name");
let input_email = document.getElementById("input-email");
let textarea = document.getElementById("textarea");
let envoyer = document.getElementById("envoyer");

envoyer.addEventListener("click", function () {
    if (input_name.value && input_email.value && textarea.value) {
        (async () => {
            try {
                const response = await fetch("/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: input_name.value,
                        email: input_email.value,
                        message: textarea.value,
                    }),
                });
                const data = await response.json();
                if (data.message) {
                    alert(data.message);
                    window.location.href = "/";
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }
});