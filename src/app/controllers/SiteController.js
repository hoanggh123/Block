class SiteController {
  index(req, res) {
    res.render("home");
  }
  contact(req, res) {
    res.render("contact");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
