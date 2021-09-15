const images = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpg",
];
let index = 0;
const imgSlider = document.getElementById("img-slider");
setInterval(() => {
  if (index >= images.length) {
    index = 0;
  }
  let img = images[index];
  imgSlider.setAttribute("src", img);
  index++;
}, [1000]);
