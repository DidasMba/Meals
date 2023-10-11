// Récupérez les éléments du DOM dont vous avez besoin
const input = document.querySelector('.input');
const main = document.querySelector('main');
const ingredients = document.querySelector('.ingredients');
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// Écoutez l'événement de soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const searchTerm = input.value;

  // Effacez le contenu précédent
  main.innerHTML = '';
  ingredients.innerHTML = '';

  // Faites une requête AJAX pour obtenir les informations sur le repas
  fetch(apiUrl + searchTerm)
    .then(response => response.json())
    .then(data => {
      const meals = data.meals;

      if (meals) {
        meals.forEach(meal => {
          // Créez les éléments HTML pour afficher les informations du repas
          const mealDiv = document.createElement('div');
          mealDiv.className = 'container';

          const mealImg = document.createElement('div');
          mealImg.className = 'img';
          mealImg.style.backgroundImage = `url(${meal.strMealThumb})`;

          const contentContainer = document.createElement('div');
          contentContainer.className = 'content-container';

          const title = document.createElement('h1');
          title.className = 'title';
          title.textContent = meal.strMeal;

          const info = document.createElement('p');
          info.className = 'info';
          info.textContent = meal.strInstructions;

          const ingredientsList = document.createElement('ul');
          ingredientsList.className = 'ingredients-list';

          // Affichez les ingrédients
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal['strIngredient' + i];
            const measure = meal['strMeasure' + i];
            if (ingredient && measure) {
              const listItem = document.createElement('li');
              listItem.textContent = `${measure} ${ingredient}`;
              ingredientsList.appendChild(listItem);
            }
          }

          // Ajoutez les éléments au DOM
          contentContainer.appendChild(title);
          contentContainer.appendChild(info);
          contentContainer.appendChild(ingredientsList);

          mealDiv.appendChild(mealImg);
          mealDiv.appendChild(contentContainer);
          main.appendChild(mealDiv);
        });
      } else {
        main.innerHTML = 'Aucun repas trouvé.';
      }
    })
    .catch(error => console.error(error));
});

// Supprimez le contenu lorsqu'une nouvelle recherche est effectuée
input.addEventListener('focus', function () {
  main.innerHTML = '';
  ingredients.innerHTML = '';
});
