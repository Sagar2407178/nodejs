const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

    app.set("view engine", "ejs");
    app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes); // /admin/add-product
app.use(shopRoutes); // /shop



app.listen(3000);


