var Plants = require('../models/plant');
var Gardens = require('../models/garden')
var bodyParser = require('body-parser');

module.exports = function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true }));

  app.get('/api/plant/', function(req,res){
    Plants.find({},function(err, plant){
      if (err) throw err;

      res.send(plant);
    });
  });

  app.get('/api/plant/:id', function(req,res){
    Plants.findById({_id: req.params.id},function(err, plant){
      if (err) throw err;

      res.send(plant);
    });
  });

  app.get('/api/garden/', function(req,res){
    Gardens.find({},function(err, garden){
      if (err) throw err;

      res.send(garden);
    })
  })

  app.post('/api/plant', function(req,res){
    if(req.body.id && req.body.reading)
    {
      Plants.find({_id:req.body.id}, function(err,plant){

        var dat = req.body.reading;
        var timestamp = new Date().toJSON()
        plant[0].readings.push({data: dat, date: timestamp});
        plant[0].save(function(err){
          res.send('success');

           //res.send('Success');
        });
      });
    }
    else if (req.body.id){
      Plants.findByIdAndUpdate(req.body.id, {
        name: req.body.name, type:req.body.type},
        function(err)
          { if(err) throw err; res.send('Success');
      })
    }
    else{
      var newPlant = Plants({name: req.body.name, type: req.body.type});
      newPlant.save(function(err){
        res.send('success');
      })
    }
  });

}
