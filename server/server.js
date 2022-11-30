const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const mysql = require('mysql')

app.use(cors());
app.use(express.json())

app.post('/api', (req, res) => {
    res.send('Hello World!')
})


app.post('/addCourse', (req, res) => {
    const courseCode = req.body.courseCode
    const courseName = req.body.courseName
    const professor = req.body.professor
    const department = req.body.department

    console.log(courseCode)
    console.log(courseName)
    console.log(professor)
    console.log(department)

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})