// 引入less
import "./style/index.less"
import ScorePanel from './modules/ScorePanel'

const s = new ScorePanel(10, 2)
for (let i = 0; i < 200; i++) {
    s.addScore()
}