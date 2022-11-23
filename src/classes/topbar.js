export class Topbar{
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(panel) {
        panel.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}