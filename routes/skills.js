import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET home page. */

router.get('/', skillsCtrl.index)

// router.get('/202920', skillsCtrl.index)
// router.get('/202999', skillsCtrl.index)
// router.get('/202981', skillsCtrl.index)
// router.get('/202902', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)
router.get("/:id", skillsCtrl.show)
router.delete("/:id", skillsCtrl.delete)


export { 
  router
}
