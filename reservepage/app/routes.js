var Reserve = require('./models/reserve');

module.exports = function(app){
    
    app.get('/reservation', function(req, res){
        Reserve.find(function(err, reserves){
            if(err)
                res.send(err);
            res.json(reserves);
        });
    });
    
    
    app.post('/reservation', function(req, res){
        Reserve.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            date: req.body.date,
            party: req.body.party,
            time: req.body.time
        }, function(err, reserve){
            if(err)
                res.send(err);
            res.json(reserve);
       /*     Reserve.find({},function(err, reserve){
                if(err)
                    res.send(err);
                res.json(reserve);
            });*/
        });
    });
    
    
    app.post('/edit', function(req, res){
       Reserve.find({
           _id: req.body.code
       }, function(err, reserve){
           if(err)
               res.send(err);
           res.json(reserve);
           console.log(reserve);
       }); 
    });
    
    
    app.post('/edit/cancel', function(req, res){
       Reserve.remove({
           _id: req.body.code
       }, function(err, reserve){
           if(err)
               res.send(err);
            res.json(reserve);
       }); 
    });
    
    app.post('/edit/update', function(req, res){
       Reserve.update({_id: req.body.code},
                      {firstname: req.body.firstname,
                      lastname: req.body.lastname,
                      phone: req.body.phone,
                      date: req.body.date,
                      party: req.body.party,
                      time: req.body.time
                     }, function(err, reserve){
                          if(err)  res.send(err);
                        res.json(reserve);
       });
    });
    
    
    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
};