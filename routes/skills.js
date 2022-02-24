import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET home page. */

// router.get('/', skillsCtrl.index)


router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    console.log('SKILLS', skills)
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})


export { 
  router
}
