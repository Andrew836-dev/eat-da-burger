const server = require("express");
const render = require("express-handlebars");
const router = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;

const app = server();

app.use(server.static("public"));

app.use(server.json());
app.use(server.urlencoded({extended: true}));

app.engine("handlebars", render({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function() {
    console.log("Listening at https://localhost:" + PORT);
})