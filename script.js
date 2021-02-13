const panels = document.querySelectorAll('.panel') //выбираю все панели по селектору класс panel и помещаю их в массив panels

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();//вызываю функцию, кот удаляет класс activ
    panel.classList.add('active');//добавляю класс актив при нажатии на див, panel становится panel active, к которому применен отлдельный стиль в сss
  })
});

function removeActiveClasses() {
  panels.forEach(panel => {//в стрелочной функции,если передается только один аргумент,могу скобки не ставить
    panel.classList.remove('active');
  })
};