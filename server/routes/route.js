//must have variables
var router = require('express').Router();
var pg = require('pg')
var config = {
  database: 'phi',
  host: 'localhost',
  port: '5432',
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);


//GETs all employee info. from database
router.get('/expenditures', function(req, res){
  pool.connect(function(err, client, done){
    if(err){
      console.log('There was an error connecting to the database');
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM employee_information', function(err, result){
        done();
        if(err){
          console.log('Error making the database query');
          res.sendStatus(500);
        } else {
          res.status(200).send(result.rows);
        }//end of else
      });//end of client.query()
    }//end of else
  });//endspool.connect()
});//end of router.get()


//ADDs new employee to database
router.post('/newEmployee', function(req,res){
  console.log('post route');
  var employeeObject = req.body;
  pool.connect(function(err, client, done){
    if(err){
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO employee_information (first_name, last_name, id_number, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);',
      [employeeObject.first_name, employeeObject.last_name, employeeObject.id_number, employeeObject.job_title, employeeObject.annual_salary], function(err, result){
        done();
        if (err){
          res.sendStatus(500);
        } else {
          res.status(200).send(result.rows);
        }//end of else
      });//end of  client.query()
    }//end of else
  });//end of pool.connect()
});//end of router.post()


//GETs all active employees from database
router.get('/activeEmployees', function(req, res){
  pool.connect(function(err, client, done){
    if(err){
      console.log('There was an error connecting to the database');
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM employee_information WHERE active;', function(err, result){
        done();
        if(err){
          console.log('Error making the database query');
          res.sendStatus(500);
        } else {
          res.status(200).send(result.rows);
        }//end of else
      });//end of client.query()
    }//end of else
  });//end of pool.connect()
}); //end of router.get()


/////////button active-inactive change///////////

//changes employees status to inactive
router.put('/inactive/:id', function(req, res){
  var employeeStatusToChangeID = req.params.id;
  console.log(req.params.id);
  pool.connect(function(err, client, done){
    if(err){
      console.log('error connecting to database')
      res.sendStatus(500);
    } else {
      client.query('UPDATE employee_information SET active = FALSE WHERE ID = $1;',
      [employeeStatusToChangeID], function(err, result){
        done();
        if (err){
          console.log('error updating the database');
          res.sendStatus(500);
        } else {
          res.status(200);
        }//end of else
      });//end of client.query()
    }//end of else
  });//end of pool.connect()
});//end of router.put

//changes employees status to active
router.put('/active/:id', function(req, res){
  var employeeStatusToChangeID = req.params.id;
  //console.log(req.params.id);
  pool.connect(function(err, client, done){
    if(err){
      console.log('error connecting to database')
      res.sendStatus(500);
    } else {
      client.query('UPDATE employee_information SET active = true WHERE ID = $1;',
      [employeeStatusToChangeID], function(err, result){
        done();
        if (err){
          console.log('error updating the database');
          res.sendStatus(500);
        } else {
          res.status(200);
        }//end of else
      });//end of client.query
    }//end of else
  });//end of pool.connect()
});//end of router.put()


///////below if for the BUDGET VIEW which in incompleted////////
//GETs data from datbase
router.get('/budget', function(req, res){
  pool.connect(function(err, client, done){
    if(err){
      console.log('There was an error connecting to the database');
      res.sendStatus(500);
    } else {
      client.query(' ', function(err, result){
        done();
        if(err){
          console.log('Error making the database query');
          res.sendStatus(500);
        } else {
          res.status(200).send(result.rows);
        }//end of else
      });//end of client.query()
    }//end of else
  });//end of pool.connect()
}); //end of router.get

//adds data to database
router.post('/newBudget', function(req,res){
  var budgetObject = req.body;
  //console.log(budgetObject)
  pool.connect(function(err, client, done){
    if(err){
      console.log('error connecting to database')
      res.sendStatus(500);
    } else {
      client.query(' ',
      [ ], function(err, result){
          done();
        if (err){
          res.sendStatus(500);
        } else {
          console.log('error posting to database')
          res.status(200).send(result.rows);
        }//end of else
      });//end of client.query()
    }//end of else
  });//end of pool.connect()
});//end of router.post


module.exports = router;
