
// Example JavaScript code for recipe sharing website

function submitRecipe(event) {
    event.preventDefault(); // Prevent default form submission
    var title = document.getElementById('recipeTitle').value;
    var ingredients = document.getElementById('recipeIngredients').value;
    var instructions = document.getElementById('recipeInstructions').value;

    // Create recipe HTML
    var recipeHtml = `
        <div class="recipe">
            <h3>${title}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
        </div>
    `;

    // Append recipe HTML to recipe container
    document.getElementById('recipeContainer').innerHTML += recipeHtml;

    // Clear form fields
    document.getElementById('recipeTitle').value = '';
    document.getElementById('recipeIngredients').value = '';
    document.getElementById('recipeInstructions').value = '';
}

// Event listener for recipe submission
document.getElementById('recipeForm').addEventListener('submit', submitRecipe);