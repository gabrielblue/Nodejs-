const db = require("../model/dbConnect");
const students = db.students;

module.exports = {
    addStudent: async(req, res, next) => {
        try{
            let info = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
            }
            const addStudent = await students.create(info)

            res.status(200).send(addStudent)
        }
        catch (error) {
            next(error)
        }
    },

    getAllStudents :async (req, res, next)=>{
        try {
            let Student = await students.findAll({})
            res.status(200).send(Student)

        } catch (error) {
            next (error)
        }
    },


    getStudent: async(req, res, next) => {
        try {
            let id = req.params.id
            let Student = await students.findOne({where: {student_id: id}})

            if(!students) {
                throw(createError(404, "Student does not exist."))
            }
            res.status(200).send(Student)
        } catch (error) {
            next(error)
        }
    },

    // Update Student by ID
    updateStudent: async(req, res, next) => {
        try {
            let id = req.params.id

            const updateStudent = await students.update(req.body, {where: {student_id: id}})

            if(!students) {
                throw(createError(404, "Student does not exist."))
            }
            res.status(200).send(updateStudent)
        } catch (error) {
            next(error)
        }
    },



}