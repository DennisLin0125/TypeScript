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

        // 判斷是否水平方向調頭
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            if (value > this.x) {
                // 代表向右調頭,則繼續往右走
                value = this.x - 10
            } else {
                value = this.x + 10
            }
        }

        // 移動身體
        this.moveBody()
        this.head.style.left = value + 'px'
        // 檢查是否撞自己
        this.checkHeadBody()
    }
    // 設置蛇頭y座標
    set y(value) {
        // 如果新值和舊值一樣就不動作
        if (this.y === value) return

        // y的範圍不在 0<=y<=290
        if (!(0 <= value && value <= 290)) {
            throw new Error('蛇撞牆了!')
        }

        // 判斷是否垂直方向調頭
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            if (value > this.y) {
                value = this.y - 10
            } else {
                value = this.y + 10
            }
        }

        // 移動身體
        this.moveBody()

        this.head.style.top = value + 'px'
        // 檢查是否撞自己
        this.checkHeadBody()
    }

    // 蛇增加身體的方法
    addBody = () => {
        // 向div添加一個div
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    // 蛇移動方法
    moveBody = () => {
        // 遍歷身體
        let snakeBodyLength = this.body.length - 1
        for (let i = snakeBodyLength; i > 0; i--) {
            // 獲取前面身體的位置
            let x = (this.body[i - 1] as HTMLElement).offsetLeft;
            let y = (this.body[i - 1] as HTMLElement).offsetTop;

            // 將值設置到當前位置上
            (this.body[i] as HTMLElement).style.left = x + "px";
            (this.body[i] as HTMLElement).style.top = y + "px";
        }
    }

    // 檢查蛇頭是否穿越自己的身體
    checkHeadBody = () => {
        // 獲取所有身體,是否發生重疊
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                // 說明碰到自己身體
                throw new Error('蛇撞到身體了~~~')
            }
        }
    }
}