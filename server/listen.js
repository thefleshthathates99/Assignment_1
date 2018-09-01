module.exports = function(http){
  http.listen(4200, ()=> {
    var d = new Date;
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at : " + n + ":" + m + " and is running on port: " + 4200)
  })
}
