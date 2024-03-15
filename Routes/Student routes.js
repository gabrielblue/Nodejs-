const express = require('express');

const StudentController = require('../Controller/Student controller');

const router = express.Router();

router.post("/addStudent", StudentController.addStudent)
router.post("/getAllStudents", StudentController.getAllStudents)

module.exports = router;
