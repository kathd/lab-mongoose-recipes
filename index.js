const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// Iteration 2
  Recipe.create(data)
  .then(recipes => {
    recipes.forEach(recipe => {
      console.log(recipe.title);
    })
  })
  .catch(err => console.error("An error happened while saving a new recipe:", err));


// Iteration 3
  Recipe.insertMany(data)
    .then(recipes => console.log(recipes))
    .catch(err => console.error("An error happened while saving recipes", err))


// Iteration 4 
  Recipe.findByIdAndUpdate("5e31a47d749af4fa6d1e2530", {duration: 100}, {new: true})
    .then(res => {
      console.log("SUCCESS: recipe updated", res);
    })
    .catch(err => {
      console.error(err);
    })


// Iteration 5
  Recipe.deleteOne({title: "Carrot Cake"})
  .then(res => {
    console.log("SUCCESS: recipe deleted", res);
  })
  .catch(err => {
    console.error(err);
  })

  
// Iteration 6
  mongoose.connection.close()
    .then(res => console.log("Connection Closed", res))
    .catch(err => console.error(err))



