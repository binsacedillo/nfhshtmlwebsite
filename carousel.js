// document.addEventListener('DOMContentLoaded', function() {
//     const carouselImages = [
//   { src: "Laboratory.jpg", name: "LABORATORY"},
//   { src: "Classroom2.jpeg", name: "CLASSROOM" },
//   { src: "adminoffice.jpg", name: "ADMIN OFFICE" },
//   { src: "Hallway.jpeg", name: "HALLWAY" },
//   { src: "comlab.jpeg", name: "COMPUTER LABORATORY" },
//   { src: "shsfocalpersonoffice.jpg", name: "SHS FOCAL PERSON OFFICE" },
//   { src: "canteen.jpg", name: "SCHOOL CANTEEN" },
// ];

// const carouselImage = document.getElementById("carousel-image");
// const imageName = document.getElementById("image-name");
// const imageCounter = document.getElementById("image-counter");

// let currentIndex = 0;

// function updateImage() {
//   carouselImage.src = carouselImages[currentIndex].src;
//   imageName.textContent = carouselImages[currentIndex].name;
//   imageCounter.textContent = `${currentIndex + 1} / ${carouselImages.length}`;
// }

// function startCarousel() {
//   updateImage();
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % carouselImages.length;
//     updateImage();
//   }, 3000);
// }

// startCarousel();
// });

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { src: "Laboratory.jpg", name: "LABORATORY" },
    { src: "Classroom2.jpeg", name: "CLASSROOM" },
    { src: "adminoffice.jpg", name: "ADMIN OFFICE" },
    { src: "Hallway.jpeg", name: "HALLWAY" },
    { src: "comlab.jpeg", name: "COMPUTER LABORATORY" },
    { src: "shsfocalpersonoffice.jpg", name: "SHS FOCAL PERSON OFFICE" },
    { src: "canteen.jpg", name: "SCHOOL CANTEEN" },
  ];

  const carouselImage = document.querySelector(".carousel-image");
  const imageName = document.querySelector(".image-name");
  const imageCounter = document.querySelector(".image-counter");

  const delay = 3000;
  let index = 0;

  function updateImage() {
    carouselImage.classList.remove("active");

    setTimeout(() => {
      carouselImage.src = images[index].src;
      carouselImage.alt = images[index].name;
      imageName.textContent = images[index].name;
      imageCounter.textContent = `${index + 1} / ${images.length}`;
      carouselImage.classList.add("active");

      index = (index + 1) % images.length;
    }, 1000);
  }

  updateImage();
  setInterval(updateImage, delay + 1000);
});
