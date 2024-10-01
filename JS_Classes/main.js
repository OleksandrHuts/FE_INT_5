

function addRect() {
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    const top = document.querySelector('#top').value;
    const left = document.querySelector('#left').value;
    const color = document.querySelector('#color').value;

    const rect = new Rectangle(width, height, color, top, left);

    rect.draw();
}

const rect1 = new Rectangle(150, 230, 'lightblue', 50, 45);
// const rect2 = new Rectangle(250, 130, 'tomato', 150, 145);

rect1.draw();
// rect2.draw();