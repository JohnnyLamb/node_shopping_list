var express = require('express');
var router = express.Router();

router.get('/items', function(req, res, next) {
  res.json(storage.items);
});

router.post('/items', function(req, res) {
  // add code here to create new item instance
  storage.addItem(req.body.name);
  res.json(storage.items);
});

router.put('/item/:id', function(req, res, next) {
  console.log(storage.items[req.params.id]);
  if(storage.items[req.params.id - 1]){
    storage.items[req.params.id - 1].name = req.body.name;
    res.json(storage.items);
  }else {
    storage.addItem(req.body.name);
    res.json(storage.items);
  }
});

router.delete('/item/:id', function(req, res, next) {
  console.log(storage.items[req.params.id]);
  if(storage.items[req.params.id - 1]){
    storage.items.splice([req.params.id - 1],1);
    res.json(storage.items);
  }else {
    res.json(storage.items);
  }
});

router.get('/item/:id', function(req, res, next) {
  console.log(storage.items);
  console.log(storage.items[req.params.id]);
  storage.items[req.params.id - 1].name;
  storage.items[req.params.id - 1].age ;

  res.json(this.items[req.params.id - 1]);
});


// constructor
function ItemLibrary() {
  this.items = [];
  this.id = 0;
}

// methods
ItemLibrary.prototype.addItem = function(name) {
  var newItem = {name: name, id: this.id};
  this.items.push(newItem);
  this.id += 1;
};

// create some instances
var storage = new ItemLibrary();
storage.addItem('Noodles');
storage.addItem('Tomatoes');
storage.addItem('Peppers');

// route handler
router.get('/items', function(req, res) {
  res.json(storage.items);
});


module.exports = router;
