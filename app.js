const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}

/* 2) Нужно получить перетащи меня в JS */
/* 3) Достаю item из html */
/* 5) чтобы передать событие для item пишес старт(говорит когда начали перетаскивать элемент) и энд(говорит когда закончили) */
/* 6) создали 2 функции и передали их потом в сторку выше 7)Добавили event и задали новый цсс класс холд который отображает границу вокруг элемента для видимости когда его перетаскиваем */
/* 9) чтобы наш элемент полностью не пропадал со страницы пишем такую функцию */
