
const icon = document.querySelector("#icon")! as HTMLElement;
const container = document.getElementsByClassName("container");
const JsConfetti = new JSConfetti();
const card = document.querySelector(".card")! as HTMLElement;
const rose = document.querySelector(".rose")! as HTMLElement;
const title = document.querySelector(".title")! as HTMLElement;
const gift1 = document.querySelector(".gift1")! as HTMLElement;

icon.addEventListener("click", () => {
  JsConfetti.addConfetti();
  setTimeout(() => {
    icon.style.visibility = "hidden";
    icon.style.opacity = "0";
    icon.style.transition = "0.2s ease-in-out";
    icon.style.transform = "scale(0.4)";
    gift1.style.transform = "scale(1.2)";
    card.style.visibility = "visible";
    rose.style.transform = "scale(1.2)";
gift1.style.visibility = "visible"
    title.style.transform = "scale(1.7)";
    rose.style.opacity = "1";
  }, 450);
});
