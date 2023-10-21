import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
    // 定義三個屬性
    snake: Snake
    food: Food
    ScorePanel: ScorePanel

    // 創建一個屬性來存儲蛇的移動方向 (也就是按鍵的方向)
    direction: string = ''
    // 創建一個屬性來記錄蛇是否活著
    isLive: boolean = true

    constructor() {
        // 創建實例
        this.snake = new Snake()
        this.food = new Food()
        this.ScorePanel = new ScorePanel()
    }

    /**
     * ArrowUp
     * ArrowDown
     * ArrowLeft
     * ArrowRight
    */

    // 遊戲初始化方法
    init = () => {
        // 綁定鍵盤事件
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this.direction = event.key
        })
        this.run()
    }

    // 創建一個控制蛇移動的方法
    run = () => {
        /**
         * 根據(this.direction)來使蛇的位置改變
         * 上: top 減小
         * 下: top 變大
         * 左:left 減小
         * 右: left 變大
         */
        let X = this.snake.x
        let Y = this.snake.y

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X += 10
                break;
        }

        // 修改蛇的x和y座標
        this.snake.x = X
        this.snake.y = Y

        // 開啟定時調用
        this.isLive && setTimeout(this.run, 300 - (this.ScorePanel.level - 1) * 30)
    }
}