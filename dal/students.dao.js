const students = require("./index.js").db("ClassRoom").collection("students")
const ObjectId = require("mongodb").ObjectId

const saveStudent = async (student) => {
  return students.insertOne(student)
}

const getAllStudents = async () => {
  const result = await students.find()
  return result.toArray()
}

const getOneStudent = async (id) => {
  return students.findOne({ _id: new ObjectId(id) })
}

const updateOneStudent = async (id, student) => {
  return students.replaceOne({ _id: new ObjectId(id) }, student)
}

const removeOneStudent = async (id) => {
  return students.deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  saveStudent,
  getAllStudents,
  getOneStudent,
  updateOneStudent,
  removeOneStudent,
}
