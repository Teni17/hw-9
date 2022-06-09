var express = require('express');
var router = express.Router();

let NotesArray = [];

let userObject = function(pName,pHeight,pWeight){
    this.Name = pName;
    this.Height = parseInt(pHeight);
    this.Weight = parseInt(pWeight);
   
}
NotesArray.push(new userObject("Teni", 190, 300));
NotesArray.push(new userObject("Guts", 180, 210));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('test.html');
});
  router.get('/getAllUsers', function(req, res, next) {
    res.json(NotesArray);
});
router.post('/AddUser',function(req,res){
  const newUser = req.body;
  NotesArray.push(newUser);
  res.status(200).json(newUser);
});
module.exports = router;
