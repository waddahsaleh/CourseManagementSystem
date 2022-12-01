

const express = require('express')
const db = require('./dbConfig')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 5000

// const course = require('./course.json')
// const fs = require('fs')



app.use(cors());
app.use(express.json())


// const jsonReader = (filePath, cb) => {
//     fs.readFile(filePath, 'utf-8', (err, fileData) => {
//         if (err) {
//             return cb && cb(err)
//         }
//         try {
//             const object = JSON.parse(fileData)
//             return cb && cb(null, object)
//         } catch (err) {
//             return cb && cb(err)
//         }
//     })
// }


// jsonReader('./course.json', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         data.courseCode += 1
//         // fs.writeFile('./course.json', JSON.stringify(data, null, 2), err => {
//         //     if (err) {
//         //         console.log(err)
//         //     }
//         // })
//     }
// })

// try {
//     const jsonString = fs.readFileSync('./course.json', 'utf-8')
//     const courseInfo = JSON.parse(jsonString)
//     console.log(courseInfo[0].courseName)
// } catch (err) {
//     console.log(err)
// }




// const newObject = {
//     courseCode: "456",
//     courseName: "algorithms",
//     professor: "masoud",
//     department: "SOFE"
// }

// const jsonString = JSON.stringify(newObject)
// console.log(jsonString)

// // fs.writeFile('./course.json', JSON.stringify(newObject, null, 2), err => {
// // if (err) {
// //         console.log(err)
// // } else {
// //     console.log("Worked")
// //     }
    
// // })




app.post('/api', (req, res) => {
    res.send('Hello World!')
})



// const data = JSON.stringify(client)

// console.log(data)


app.post('/addCourse', (req, res) => {
    const courseID = null
    const courseCode = req.body.courseCode
    const courseName = req.body.courseName
    const professor = req.body.professor
    const department = req.body.department

    db.query(
        `INSERT INTO course VALUES (?, ?, ?, ?, ?)`, [courseID, courseCode, courseName, professor, department],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/deleteCourse', (req, res) => {
    const courseID = req.body.courseID
    db.query(
        `DELETE FROM course WHERE courseID = ?`, [courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/getCourse', (req, res) => {
    db.query(
        `SELECT * FROM course`,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})


app.post('/addStudent', (req, res) => {
    const studentID = null
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const program = req.body.program

    db.query(
        `INSERT INTO student VALUES (?, ?, ?, ?)`, [studentID, firstName, lastName, program],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/deleteStudent', (req, res) => {
    const studentID = req.body.studentID
    db.query(
        `DELETE FROM student WHERE studentID = ?`, [studentID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post('/getStudent', (req, res) => {
    db.query(
        `SELECT * FROM student`,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})