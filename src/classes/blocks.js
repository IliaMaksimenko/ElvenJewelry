import {but, col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</>`), css(styles))
    }
}

export class SubTitleBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<h2>${this.value}</h2>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class logoBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class menuBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map(col).join('')
        return row(html, css(styles))
    }
}

export class basketBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class buttonBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const styles = css(this.options.styles)
        return `<button class = "redirect_button" id = "button" style="${styles}">${this.value}</button>`
    }

}

export class imageRingBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class imageLustBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class logoLustBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {alt, styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}"/>`, css(styles))
    }
}

export class sloganBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<h3>${this.value}</h3>`), css(styles))
    }
}

export class aboutUsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}
