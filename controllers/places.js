// const router = require('express').Router()
// const places = require("../models/places")

// // router.get('/', (req, res) => {
// //     res.send('GET /places')
// // })
// router.post('/', (req, res) => {
//     //console.log(req.body)
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//   })  

// router.get('/new', (req, res) => {
//     res.render('places/new')
//   })


//   router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })

// //Delete
// router.delete('/:id', (req, res) => {
//   console.log(req.params)
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })


//   router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })


// router.get('/new', (req, res) => {
//     res.render('places/new')
// });

// //Edit
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// })

// //PUT route
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })


// module.exports = router



//
const express = require('express')
const router = express.Router()
const places = require('../models/places.js')
// router.get('/', (req, res) => {
//     res.send('GET /places')
// })
//opost
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
//new

 router.get('/new', (req, res) => {
  
  res.render('places/new');
})
//show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})
//delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})
//Edit
router.get('/:id/edit',(req,res) =>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else{

      res.render('places/edit',{place: places[id],id:id})
  }

  

})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
 
 
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
 
      // Save the new data into places[id]
     places[id] = req.body
  res.redirect(`/places/${id}`)
  }
})



//   GET /places
router.get('/', (req, res) => {

      
    res.render('places/index',{places})
  })

 
//Part 3: Updating index and show
const router = require('express').Router()
const db = require('../models')

//GET /places stub
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
  // res.send('GET /places stub')
})

//POST /places stub
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // res.send('POST /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

//GET /places/:id stub
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { places })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router