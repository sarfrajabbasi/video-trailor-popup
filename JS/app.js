function createEl(e) {
  const element = document.createElement(e);
  return element;
}
function generaterandomWords(words) {
  var loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Split the Lorem Ipsum text into an array of words
  const loremWords = loremText.split(" ");
  // Take the specified number of words from the array
  
  let newArr = [];
  let randomWord = ()=>{
   return loremWords[Math.floor((Math.random()*loremWords.length))]
  }
  for(let i=1;i<=words;i++){
    //   console.log(randomWord());
    newArr.push(randomWord())
  }
//   console.log(newArr.join(' '));

  // Join the selected words back into a string
  return newArr.join(" ");
}

const MAINCONTAINER = createEl("div");
MAINCONTAINER.classList.add("main-container");

const IMG = createEl("img");
IMG.src =
  "https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
IMG.alt = "movie-image";
const movieName = createEl("h2");
movieName.textContent = "movie Title";

const para = createEl("p");
para.innerHTML = generaterandomWords(1000);

// append
MAINCONTAINER.appendChild(IMG);

document.body.append(MAINCONTAINER, movieName, para);
