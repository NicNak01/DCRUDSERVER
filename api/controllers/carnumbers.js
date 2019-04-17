const mongoose = require("mongoose");
const CarNumber = require("../models/carnumber");

exports.get_all_carNumbers = (req, res, next) => {
  CarNumber.find()
    // .select("_id  number owner")
    .select("  number owner")
    .exec()
    .then(docs => {
      const response =
        docs.map(doc => {
          return {
            // id: doc._id,
            number: doc.number,
            owner: doc.owner,
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
    // _id: new mongoose.Types.ObjectId(),
    number: req.body.number,
    owner: req.body.owner,
  });

  carNumber
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created item successfully",
        createdItem: {
          number: result.number,
          owner: result.owner,
          // _id: result._id,
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
  const id = req.params.itemId;
  // CarNumber.deleteOne({ _id: id })
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

