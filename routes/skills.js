import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/home', function(req, res) {
  res.render('home', { title: 'Express' })
})

export { 
  router
}
