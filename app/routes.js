const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'question-1'
router.post('/v1/question4-answer', function (req, res) {
    var Adventure = req.session.data['where-will-you-adventure']
    if (Adventure== "The marshy bogs"){
      res.redirect('/v1/question5A')
    }else if (Adventure== "The castle ruins")
        res.redirect('/v1/question5B')
     
    else {
      // Send user to ineligible page
      res.redirect('/v1/question5C')
    }
   })
 // Run this code when a form is submitted to 'question-1'
router.post('/v1/question5A-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Choice = req.session.data['what-do-you-do']
     // Check whether the variable matches a condition
    if (Choice == "take a dip in the bogs"){
      // Send user to next page
      res.redirect('/v1/scene5Agood')
    } else {
      // Send user to ineligible page
      res.redirect('/v1/scene5Abad')
    }
   })
  // Run this code when a form is submitted to 'question-1'
router.post('/v1/question5B-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Choice = req.session.data['what-to-do']
     // Check whether the variable matches a condition
    if (Choice == "seek sheler in the ruins"){
      // Send user to next page
      res.redirect('/v1/scene5Bbad')
    } else {
      // Send user to ineligible page
      res.redirect('/v1/scene5Bgood')
    }
   })
     // Run this code when a form is submitted to 'question-1'
router.post('/v1/question5C-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Trade = req.session.data['do-you-trade']
     // Check whether the variable matches a condition
    if (Trade == "Sure"){
      // Send user to next page
      res.redirect('/v1/scene5Cbad')
    } else {
      // Send user to ineligible page
      res.redirect('/v1/scene5Cgood')
    }
   })

   // version 2
// Run this code when a form is submitted to 'question-1'
router.post('/v2/question4-answer', function (req, res) {
  var Adventure = req.session.data['where-will-you-adventure']
  if (Adventure== "The marshy bogs"){
    res.redirect('/v2/question5A')
  }else if (Adventure== "The castle ruins")
      res.redirect('/v2/question5B')
   
  else {
    // Send user to ineligible page
    res.redirect('/v2/question5C')
  }
 })
// Run this code when a form is submitted to 'question-1'
router.post('/v2/question5A-answer', function (req, res) {

  // Make a variable and give it the value from 'where-do-you-live'
  var Choice = req.session.data['what-do-you-do']
   // Check whether the variable matches a condition
  if (Choice == "take a dip in the bogs"){
    // Send user to next page
    res.redirect('/v2/scene5Agood')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/scene5Abad')
  }
 })
// Run this code when a form is submitted to 'question-1'
router.post('/v2/question5B-answer', function (req, res) {

  // Make a variable and give it the value from 'where-do-you-live'
  var Choice = req.session.data['what-to-do']
   // Check whether the variable matches a condition
  if (Choice == "seek sheler in the ruins"){
    // Send user to next page
    res.redirect('/v2/scene5Bbad')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/scene5Bgood')
  }
 })
   // Run this code when a form is submitted to 'question-1'
router.post('/v2/question5C-answer', function (req, res) {

  // Make a variable and give it the value from 'where-do-you-live'
  var Trade = req.session.data['do-you-trade']
   // Check whether the variable matches a condition
  if (Trade == "Sure"){
    // Send user to next page
    res.redirect('/v2/scene5Cbad')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/scene5Cgood')
  }
 })

module.exports = router
