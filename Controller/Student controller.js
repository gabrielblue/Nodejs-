const db = require("../model/dbConnect");
const students = db.students;

module.exports = {
    addStudent: async(req, res, next) => {
        try{
            let info = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
            }
            const addStudent = await students.create(info)

            res.status(200).send(addStudent)
        }
        catch (error) {
            next(error)
        }
    },

    // 
    getAllStudents :async (req, res, next)=>{
        try {
            let student = await Student.findAll({})
            res.status(200).send(student)

        } catch (error) {
            next (error)
        }
    },
}