// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// // Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  btdCreate: document.querySelector('button[data-create]'),
  btdDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

refs.input.addEventListener('input', onInputChange);
refs.btdCreate.addEventListener('click', createBoxes);
refs.btdDestroy.addEventListener('click', destroyBoxes);

let inputValue = 0;

function onInputChange(ev) {
  inputValue = ev.currentTarget.value;
}

function addDivsOnDocument(firstDiv) {
  refs.boxes.insertAdjacentHTML('beforeend', firstDiv);
} 

function createBoxes() {
  let width = 30;
  let height = 30;
  let firstDiv = `<div width="${width}px" height="${height}px" background-color="${getRandomHexColor()}"></div>`;

  for (let i = 0; i < inputValue; i+=1) {
    width += 10;
    height += 10;

    inputValue += `<div width="${width}px" height="${height}px" background-color="${getRandomHexColor()}"></div>`;
  }
    addDivsOnDocument(firstDiv)
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

createBoxes(2)