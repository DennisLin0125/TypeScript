export default class Snake {
    // 表示蛇頭元素
    head: HTMLElement
    // 蛇的身體 (包含頭)
    body: HTMLCollection
    // 獲取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.body = this.element.getElementsByTagName('div')
    }

    // 獲取蛇頭x座標
    get x() {
        return this.head.offsetLeft
    }
    // 獲取蛇頭y座標
    get y() {
        return this.head.offsetTop
    }

    // 設置蛇頭x座標
    set x(value) {
        // 如果新值和舊值一樣就不動作
        if (this.x === value) return

        // x的範圍在 0<=x<=290
        if (!(0 <= value && value <= 290)) {
            throw new Error('蛇撞牆了!')
        }
        this.head.style.left = value + 'px'
    }
    // 設置蛇頭y座標
    set y(value) {
        // 如果新值和舊值一樣就不動作
        if (this.y === value) return

        // y的範圍不在 0<=y<=290
        if (!(0 <= value && value <= 290)) {
            throw new Error('蛇撞牆了!')
        }

        this.head.style.top = value + 'px'
    }

    // 蛇增加身體的方法
    addBody = () => {
        // 向div添加一個div
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
}