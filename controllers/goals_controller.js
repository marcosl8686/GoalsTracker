var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var goals = require("../models/goals.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  goals.all(function(data) {
    res.render("index", {goals: data});
  });
});

router.post("/", function(req, res) {
  goals.create([
    "goal", "complete"
  ], [
    req.body.goal, req.body.complete
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  goals.update({
    complete: req.body.complete
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;