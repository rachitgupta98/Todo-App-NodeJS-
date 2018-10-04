const bodyParser = require("body-parser");

const data = [{ item: "NodeJs" }, { item: "ReactJs" }, { item: "Flutter" }];
let urlencoded = bodyParser.urlencoded({ extended: false });

let todocontroller = function(app) {
  //render ejs
  app.get("/show", (req, res) => {
    res.render("show", { todos: data });
  });
  //adding content
  app.post("/show", urlencoded, (req, res) => {
    data.push(req.body);
    res.redirect("/show");
  });
  //deleting content
  app.get("/show/:item", (req, res) => {
    if (req.params.item != "") {
      data.splice(req.params.item, 1);
    }
    res.redirect("/show");
  });
};
module.exports = todocontroller;
