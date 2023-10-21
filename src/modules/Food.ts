// 定義food-class
export default class Food {
    // 定義一個屬性表示食物的對應元素
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }

    // 獲取食物x軸方法
    get x() {
        return this.element.offsetLeft
    }

    // 獲取食物x軸方法
    get y() {
        return this.element.offsetHeight
    }

    // 修改食物的位置
    change = () => {
        /**
         * 生成一個隨機位置
         * 位置最小是0 最大是290
         * 蛇移動一次的大小是10px
         * 所以食物的座標必須是10的倍數
         */

        let x = Math.round(Math.random() * 29) * 10;
        let y = Math.round(Math.random() * 29) * 10;

        this.element.style.left = x + "px"
        this.element.style.top = y + "px"
    }
}