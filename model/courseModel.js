module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('courses', {
        course_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    // Student.sync({ alter: true });

    return Course
}