const express = require('express');
//const app = express();
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();

const { Employee } = require('../models/employee');


// for retriving all the employee records
// => localhost:3000/employees/list
router.get('/' , (req, res) => {
    Employee.find((err , docs) => {
        if(!err) { res.send(docs); }
        else { console.log(`Error in Retriving Employees : ${JSON.stringify(err , undefined , 2)}`)}
    });
});

router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${req.params.id}`);

        Employee.findById(req.params.id, (err,doc) => {
            if(!err) { res.send(doc); }
            else { console.log(`Error in Retriving Employee : ${JSON.stringify(err, undefined , 2)}`)}
        });
});

router.post('/' , (req,res) => {
    const emp = new Employee({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Email : req.body.Email,
        Dob : req.body.Dob,
        Bio : req.body.Bio,
    });
    emp.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log(`Error in Employee Save : ${JSON.stringify(err, undefined , 2)}`)}
    });
});

router.put('/:id' , (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${req.params.id}`);

        const emp = {
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            Email : req.body.Email,
            Dob : req.body.Dob,
            Bio : req.body.Bio,
        };
        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new : true } , (err , doc) => {
            if(!err) { res.send(doc); }
            else { console.log(`Error in Employee Update : ${JSON.stringify(err, undefined  ,2 )}`)}
        });
});

router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id : ${req.params.id}`);

        Employee.findByIdAndRemove(req.params.id, (err,doc) => {
            if(!err) { res.send(doc); }
            else { console.log(`Error in Employee Delete : ${JSON.stringify(err, undefined , 2)}`)}
        });
});


module.exports = router;