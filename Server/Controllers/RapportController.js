const rapport = require("../Models/RapportModel");

//add rapport method Post
const AddRapport = async (req, res) => {
  try {
    const newRapport = await rapport.create(req.body);
    res.json({ newRapport, msg: "Rapport Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};

//get all data rapports
//method: @GET
const GetAllDataRapport = async (req, res) => {
  try {
    const rapports = await rapport.find({});
    res.json(rapports);
  } catch (error) {
    console.log(error);
  }
};

//delete data rapport
//method: @Delete
const deletedDataRapport = async (req, res) => {
  try {
    const deletedRapport = await rapport.findByIdAndDelete(req.params.id);
    res.json({deletedRapport, msg: "User has been deleted successfully !!", deletedRapport });
  } catch (error) {
    console.log(error);
  }
};

//update data rapport
//method: PUT
const UpdateDataRapport = async (req, res) => {
  try {
    const updatedRapport = await rapport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRapport);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UpdateDataRapport, deletedDataRapport, GetAllDataRapport, AddRapport };
