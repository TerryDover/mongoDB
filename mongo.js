/*

Insert 3 new recipes and their ingredients, amounts, and measures in to the Database
	
Write a query to get a list of all the Recipes
	
Write a query to get a list of Recipes that use a certain Ingredient
	
Write a query to update a recipe you added
		
Put your SQL commands in a file in a Github repo and submit the repo link to Lab 1

*/


const recipesFile =
[
    {
      "recipeName": "Cheese Burger",
      "recipeDesc": "Burger with cheese on a bun",
      "instructions": "Grill burger, melt cheese and put on bun.",
      "ingredients": [
        {
          "ingredientName": "bun",
          "measure": "pieces",
          "qty": "1"
        },
        {
          "ingredientName": "cheese",
          "measure": "slices",
          "qty": "1"
        },
        {
          "ingredientName": "hamburger",
          "measure": "patty",
          "qty": "1"
        }
      ]
    },
    {
      "recipeName": "Cheese and Crackers",
      "recipeDesc": "Crackers served with Cheese",
      "instructions": "Slice cheese and serve with crackers.",
      "ingredients": [
        {
          "ingredientName": "crackers",
          "measure": "pieces",
          "qty": "1"
        },
        {
          "ingredientName": "cheese",
          "measure": "slices",
          "qty": "1"
        }
        
      ]
    },
    {
      "recipeName": "Bologna Sandwich",
      "recipeDesc": "Coldcut sandwich",
      "instructions": "Place bologna and cheese between two slices of bread",
      "ingredients": [
        {
          "ingredientName": "bread",
          "measure": "slices",
          "qty": "2"
        },
        {
          "ingredientName": "cheese",
          "measure": "slices",
          "qty": "1"
        },
        {
          "ingredientName": "bologna",
          "measure": "slices",
          "qty": "1"
        }
      ]
    }
    
  ]

  /* Insert Many */
  db.recipes.insertMany(recipesFiles);

/* query to get all recipes*/
   db.recipes.find();

   /* query to find particular ingredient */
   db.recipes.find({"ingredients.ingredientName":"hamburger"});

   /* update a recipe you added */

   db.recipes.updateOne(
   { recipeName: "Cheese Burger" },
   {
       $set: {"recipeName": "Grilled Cheese Burger"}
   }
   )
   