const mongoose = require("mongoose");
const CarNumber = require("../models/carnumber");

exports.get_all_carNumbers = (req, res, next) => {
  CarNumber.find()
    .select(" number owner")
    .exec()
    .then(docs => {
      const response = docs.map(doc => {
        return {
          number: doc.number,
          owner: doc.owner
        };
      });
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.create_carNumbers = (req, res, next) => {
  const carNumber = new CarNumber({
    number: req.body.number,
    owner: req.body.owner
  });
  carNumber
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created carNumber successfully",
        createdcarNumber: {
          number: result.number,
          owner: result.owner
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.delete_carNumbers = (req, res, next) => {
  const id = req.params.carNumberId;
  CarNumber.deleteMany({ number: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Car Number Plate Deleted",
        request: {
          type: "POST",
          url: "http://localhost:8080/carnumbers",
          body: { id: "Number", number: "String" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};