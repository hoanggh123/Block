const Course = require("../models/courses");
const { muTipLeMongooseToObject } = require("../../util/mongoouse");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: muTipLeMongooseToObject(courses) });
      })
      .catch(next);
  }
  contact(req, res) {
    res.render("contact");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
