const Course = require("../models/courses");

class SiteController {
  index(req, res) {
    Course.find({})
      .then((courses) => {
        // Xử lý kết quả truy vấn và trả về cho client
        res.json(courses);
      })
      .catch((err) => {
        // Xử lý lỗi và trả về một JSON object báo lỗi cho client
        res.status(400).json({ error: "ERROR..!!!" });
      });
  }
  contact(req, res) {
    res.render("contact");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
