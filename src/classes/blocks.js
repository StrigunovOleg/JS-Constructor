import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('должен быть метод toHTML')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<h1>${this.value}</h1>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options
        const html = this.value.map(item => col(item))
        return row(html.join(''), css(styles))
    }
}

export class ImgBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options
        return row(col(`${this.value}`), css(styles))
    }
}