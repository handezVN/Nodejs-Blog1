const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class MeController {

    // [GET] /me/stored/courses
    show(req, res,next) {
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
            .then(([courses,deletedCount])=>{
                res.render('me/stored/courses',{
                courses : mutipleMongooseToObject(courses),
                deletedCount,
                })
            })
            .catch(next)
        // Course.find({})
        // .then(courses =>{
        //     res.render('me/stored/courses',{courses : mutipleMongooseToObject(courses)})
        // })
        // .catch(next)
    }
    // [GET] /me/trash/courses  
    trashCourse(req,res,next){
        Course.findDeleted({})
        .then(courses =>{
            res.render('me/trash/courses',{courses : mutipleMongooseToObject(courses)})
        })
        .catch(next)
    }
}

module.exports = new MeController();
