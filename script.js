const getBtn = document.querySelector('#getBtn');
const imageContainer = document.querySelector('.image-container');

const randomFruitName = [
  'apple',
  'banana',
  'orange',
  'grape',
  'strawberry',
  'blueberry',
  'mango',
  'watermelon',
  'pineapple',
  'cherry',
  'pear',
  'kiwi',
  'lemon',
  'lime',
  'peach',
  'plum',
  'coconut',
  'avocado',
]

function getFruit() {
  const fruits = randomFruitName[Math.floor(Math.random() * randomFruitName.length)];
  return fruits
}

getBtn.addEventListener('click', async () => {
  const fruit = getFruit()
  const API_KEY = 'uSF3xE1uKNicwjFUD18zd4M8jC_WRAAqJUG4pCi6b90'
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${fruit}&client_id=${API_KEY}`);
  const data = await response.json();
  const img = document.createElement('img');
  img.src = data.results[0].urls.regular; 
  imageContainer.appendChild(img);
  img.previousElementSibling.remove();
})


