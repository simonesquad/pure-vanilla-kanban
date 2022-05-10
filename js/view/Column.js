export default class Column {
    constructor(id, title) {

    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            
        `)
    }
}