const express = require("express");
const courseController = require("../controller/course controller");
const router = express.Router();

router.get("/getAllCourse", course controller.getAllCourse);
router.get("/getCourse/:id", course controller.getCourse);
router.post("/addCourse", course controller.addCourse);
router.patch("/updateCourse/:id", course controller.updateCourse);

module.exports = router;