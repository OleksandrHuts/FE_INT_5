class Rectangle {
    constructor(width, height, color, left, top) {
        this.width = width;
        this.height = height;
        this.colorVal = color;
        this.left = left;
        this.top = top;
    }

    draw() {
        document.body.insertAdjacentHTML('afterbegin',`
            <div style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.colorVal};
            position: absolute; top: ${this.top}px; left: ${this.left}px"></div>`)
    }

    get square() {
        return this.width * this.height
    }

    get color() {
        return this.color;
    }

    set color(newColor) {
        this.colorVal = newColor
    }
}