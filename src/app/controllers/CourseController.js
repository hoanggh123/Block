const Course = require("../models/courses");
const { muTipLeMongooseToObject } = require("../../util/mongoouse");
class CourseController {
detail(req,res) {
  res.send("Đây là chi tiết")
}
}
module.exports = new CourseController();
