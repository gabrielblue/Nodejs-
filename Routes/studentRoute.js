const express = require('express');
const studentController = require('../Controller/Student controller');
const router = express.Router();

router.post("/addStudent", studentController.addStudent)
router.get("/getAllStudents", studentController.getAllStudents)
router.get("/getStudent/:id", studentController.getStudent)
router.patch("/updateStudent/:id", studentController.updateStudent)
module.exports = router;