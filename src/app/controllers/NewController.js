class NewController {
  news(req, res) {
    res.render("news");
  }
  details(req,res){
    res.send("Trang chi tiet")
  }
}
module.exports = new NewController();
