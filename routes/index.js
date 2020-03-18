const router = require('express').Router();

const students = [
    {
        name: "Frank Larbi",
        DOB: "10/1/1992",
        program: "BSC ICT",
        level: "100",
        image:"/images/img1.jpg"
    },
    {
        name: "Rhoda LArbi",
        DOB: "10/1/1992",
        program: "BSC ICT",
        level: "200",
        image:"/images/img2.jpg"
    },
    {
        name: "Patricia Osei",
        DOB: "10/1/1992",
        program: "BSC ICT",
        level: "200",
        image:"/images/img3.jpg"
    },
    {
        name: "Felicia Kabutey",
        DOB: "10/1/1992",
        program: "BSC ICT",
        level: "200",
        image:"/images/img4.jpg"
    },
    {
        name: "John Asare",
        DOB: "10/1/1992",
        program: "BSC ICT",
        level: "200",
        image:"/images/img5.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;