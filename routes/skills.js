import { Router } from 'express'

const router = Router()

/* GET home page. */

router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})


export { 
  router
}
