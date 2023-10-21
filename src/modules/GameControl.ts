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
    }
}