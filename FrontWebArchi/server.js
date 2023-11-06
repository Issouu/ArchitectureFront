const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");

const PORT = 3000;
const HOST_NAME = "0.0.0.0";
const backURL = "http://backend-service:80";

const app = express();
app.use(express.static("HTML"));
app.use(express.static("CSS"));
app.use(express.static("JS"));
app.use(express.static("Resources"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "get.html"));
  });

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "create.html"));
    });

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "contact.html"));
    });

app.get("/modify", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "modify.html"));
    });

app.get("/delete", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML", "delete.html"));
    });

app.get("/articles", (req, res) => {
    fetch(`${backURL}/articles`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ articles: data.articles });
    })
    .catch((err) => {
        console.error(err);
    });
});

app.get("/articles/:id", (req, res) => {
    const { id } = req.params;
    fetch(`${backURL}/articles/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ article: data.article });
    })
    .catch((err) => {
        console.error(err);
    });
});

app.post("/articles", (req, res) => {
    const { title, content } = req.body;
    fetch(`${backURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ articleId: data.articleId });
    })
    .catch((err) => {
        console.error(err);
    });
});

app.put("/articles/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    fetch(`${backURL}/articles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ message: data.message });
    })
    .catch((err) => {
        console.error(err);
    });
});

app.delete("/articles/:id", (req, res) => {
    const { id } = req.params;
    fetch(`${backURL}/articles/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ message: data.message });
    })
    .catch((err) => {
        console.error(err);
    });
});

app.post("/contacts", (req, res) => {
    const { name, email, message } = req.body;
    fetch(`${backURL}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        res.json({ message: data.message });
    })
    .catch((err) => {
        console.error(err);
    });
});



app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})