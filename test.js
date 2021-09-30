let btn = document.createElement("button");
btn.innerHTML = "CLICK ME";
btn.onclick = function () {
  alert("You clicked me it tickles");
};
document.body.appendChild(btn);

let paragraph = document.createElement('paragraph')
paragraph.innerHTML = "THIS IS A PARAGRAPH"
document.body.appendChild(paragraph)
