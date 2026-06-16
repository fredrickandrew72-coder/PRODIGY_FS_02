const Employee = require("../models/Employee");

// CREATE
const createEmployee = async (req, res) => {
  try {

    console.log(req.body);

    const employee = await Employee.create(req.body);

    res.status(201).json(employee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL
const getEmployees = async (req,res)=>{
  try{

    const employees = await Employee.find();

    res.status(200).json(employees);

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};

// GET ONE
const getEmployeeById = async (req,res)=>{
  try{

    const employee = await Employee.findById(req.params.id);

    res.status(200).json(employee);

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};

// UPDATE
const updateEmployee = async (req,res)=>{
  try{

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );

    res.status(200).json(employee);

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};

// DELETE
const deleteEmployee = async (req,res)=>{
  try{

    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message:"Employee deleted"
    });

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};