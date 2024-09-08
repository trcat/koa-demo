const {
  saveStudent,
  getAllStudents,
  getOneStudent,
  updateOneStudent,
  removeOneStudent,
} = require("../dal/students.dao")

const addStudent = async (student) => {
  return saveStudent(student)
}

const getStudents = async () => {
  return getAllStudents()
}

const getStudent = async (id) => {
  return getOneStudent(id)
}

const updateStudent = async (id, student) => {
  return updateOneStudent(id, student)
}

const removeStudent = async (id) => {
  return removeOneStudent(id)
}

module.exports = {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  removeStudent,
}