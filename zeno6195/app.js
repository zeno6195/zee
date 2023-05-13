// Get the featured games element
var featuredGames = document.getElementById('featured-games');

// Loop through each featured game and create a new element for it
for (var i = 0; i < data.featured.length; i++) {
  var game = data.featured[i];

  // Create a new game element
  var gameElement = document.createElement('div');
  gameElement.classList.add('game');

  // Add the game image
  var imageElement = document.createElement('img');
  imageElement.src = game.image;
  gameElement.appendChild(imageElement);

  // Add the game title
  var titleElement = document.createElement('h3');
  titleElement.textContent = game.title;
  gameElement.appendChild(titleElement);

  // Add the game description
  var descriptionElement = document.createElement('p');
  descriptionElement.textContent = game.description;
  gameElement.appendChild(descriptionElement);

  // Add the TikTok link
  var tiktokLinkElement = document.createElement('a');
  tiktokLinkElement.textContent = "Follow us on TikTok";
  tiktokLinkElement.href = game.tiktokLink;
  gameElement.appendChild(tiktokLinkElement);

  // Add the game element to the featured games container
  featuredGames.appendChild(gameElement);
}

// Create a new image element
var imageElement = new Image();

// Set the source of the image
imageElement.src = 'C:\Users\kagis\OneDrive\Documents\zeno6195\imagies';

// Add the image to an existing element on the page
var containerElement = document.getElementById('container');
containerElement.appendChild(imageElement);

var input = document.getElementById("input");
var output = document.getElementById("output");
var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  var userMessage = input.value;
  input.value = "";
  output.innerHTML += "<p>You: " + userMessage + "</p>";

  // Replace this with your chatterbot's response
  var botMessage = "Hello! How can I assist you?";
  output.innerHTML += "<p>Chatterbot: " + botMessage + "</p>";
});

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit.click();
  }
});
