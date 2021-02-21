import {col, css, row} from "../utils";

class Block {
    constructor(type, value, options) {
        this.type = type
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('должен быть метод toHTML')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    }

    toHTML() {
        const {styles} = block.options
        return row(col(`<p>${block.value}</p>`), css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }
}

export class ImgBlock extends Block {
    constructor(value, options) {
        super('img', value, options);
    }
}