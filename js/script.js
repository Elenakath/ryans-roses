var available = document.querySelector("h3");
console.log(available.outerHTML);

var mainTitle = document.querySelector(".main-title");
console.log(mainTitle.outerHTML);

var firstItem = document.querySelector("ul li");
console.log(firstItem.outerHTML);

var intro = document.querySelector(".intro p");
intro.style.color = "purple";
intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";
intro.innerHTML = 'Available <span class="increase__size">today</span>';

var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";

console.log(intro.outerHTML);

var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "LUlu bouquet";
console.log(firstImg.outerHTML);

var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu.";

console.log(firstCaption.outerHTML);

firstCaption.innerHTML = "The <strong>Lulu</strong>";
console.log(firstCaption.innerHTML);




