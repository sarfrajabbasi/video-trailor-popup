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
  let randomWord = () => {
    return loremWords[Math.floor(Math.random() * loremWords.length)];
  };
  for (let i = 1; i <= words; i++) {
    //   console.log(randomWord());
    newArr.push(randomWord());
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
const movieName = createEl("h1");
movieName.textContent = "movie Title";

const para = createEl("p");
para.innerHTML = generaterandomWords(100);

const btn = createEl("button");
btn.classList.add("btn");
btn.textContent = "Watch now";

// trailer
const trailer = createEl("div");
trailer.classList.add("trailer-container");
trailer.classList.add("hide");

const video = createEl("video");
video.src = "./video/pexels-sunsetoned-5968893 (2160p).mp4";
video.setAttribute("controls", "true");

const close1 = createEl("i");
const classToAdd = "fas fa-times fa-2x close-icon";
close1.classList.add(...classToAdd.split(" "));

// append
trailer.append(video, close1);
MAINCONTAINER.append(IMG, movieName, para, btn);

document.body.append(MAINCONTAINER, trailer);

// close the video and open

// select element
const btnClass = document.querySelector(".btn");
const closeIcon1 = document.querySelector(".close-icon");
const video2 = document.querySelector("video");

const trailerContainer = document.querySelector(".trailer-container");

// event
btnClass.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeIcon1.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video2.pause();
  video2.currentTime = 0;
});
