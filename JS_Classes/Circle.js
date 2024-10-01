class Circle extends Square {
    constructor(width, color, left, top) {
        super(width, color, left, top)
    }

    draw() {
        document.body.insertAdjacentHTML('afterbegin',`
            <div style="border-radius: 50%; width: ${this.width}px; height: ${this.height}px; background-color: ${this.colorVal};
            position: absolute; top: ${this.top}px; left: ${this.left}px"></div>`)
    }

    get square() {
        return Math.PI * Math.pow(this.width / 2, 2)
    }
}