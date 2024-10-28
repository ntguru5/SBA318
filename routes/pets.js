const express = require('express');
const router = express.Router();
const upload = require('../multer');
const dogs = require('../data/dogs');

// GET routes
router.get('/', (req, res) => {
  console.log(dogs);
  res.render('pets', { pets: dogs });
});

router.get('/:id', (req, res) => {
  const petId = req.params.id;
  const pet = dogs.find((pet) => pet.id === parseInt(petId));
  if (pet) {
    res.render('petProfile', { pet });
  } else {
    res.status(404).send('Pet not found');
  }
});

// POST routes
router.post('/', upload.single('profilePicture'), (req, res) => {
  const newPet = req.body;
  newPet.profilePicture = req.file.filename;
  dogs.push(newPet);
  res.redirect('/pets');
});

// PATCH routes
router.patch('/:id', (req, res) => {
  const petId = req.params.id;
  const updatedPet = req.body;
  const petIndex = dogs.findIndex((pet) => pet.id === parseInt(petId));
  if (petIndex !== -1) {
    dogs[petIndex] = updatedPet;
    res.redirect('/pets');
  } else {
    res.status(404).send('Pet not found');
  }
});

// DELETE routes
router.delete('/:id', (req, res) => {
  const petId = req.params.id;
  const petIndex = dogs.findIndex((pet) => pet.id === parseInt(petId));
  if (petIndex !== -1) {
    dogs.splice(petIndex, 1);
    res.redirect('/pets');
  } else {
    res.status(404).send('Pet not found');
  }
});

module.exports = router;