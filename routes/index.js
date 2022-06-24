const express = require('express');//no lo tengo claro pero creo que es para llamar a expres
const router = express.Router();//no lo entiendo mucho-> https://www.geeksforgeeks.org/express-js-express-router-function/
const Movie=require('../models/Movie.model')//->crea la const movie y llama(requiere)a la carpeta models/movie.model.js
/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

router.get("/movies", (req, res) => {
    Movie
    .find()
    .then(moviesFromApi => {
        console.log(moviesFromApi)
      res.render("movies.hbs",{ moviesFromApi });
    })
    .catch(error => console.log(error));
  });
  
  //prueba iteracion 4
  router.get("/details/:id", (req, res, next) => { 
      // aplicar destructuracion sobre req.params
      
      // acceder a cada pelicula
      Movie.findById(req.params.id)
      .then((response) => {
          console.log(response);
          res.render("see_more.hbs", { response });
        })
        .catch((err) => {
            next(err);
        });
        
       
    });
//prueba iteracion 4
   
module.exports = router;
