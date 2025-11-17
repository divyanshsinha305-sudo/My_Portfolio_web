const texts = [
  "Frontend Developer ",
  "Python Programmer ",
  "Tech Enthusiast ",
  "Responsive Web Designer",
  "React Enthusiast",
  "Open-Source Contributor",
  "Engineering Student",
];

let index = 0;
const element = document.getElementById("textchg");

function changeText() {
  element.classList.add("fade-out");

  setTimeout(() => {
    element.textContent = texts[index];
    element.classList.remove("fade-out");
    element.classList.add("fade-in");

    index = (index + 1) % texts.length;
  }, 500);
}

changeText();
setInterval(changeText, 2000);
