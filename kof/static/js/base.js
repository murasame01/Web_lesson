import { GameMap } from '/kof/static/js/game_map/base.js';
import { Kyo } from './player/kyo.js';
class KOF {
    constructor(id) {
        this.$kof = $('#' + id);
        this.game_map = new GameMap(this);
        this.Players = [new Kyo(this, {
            id: 0,
            x: 200,
            y: 0,
            width: 100,
            height: 200,
            color: 'blue',
        }),
        new Kyo(this, {
            id: 1,
            x: 600,
            y: 0,
            width: 100,
            height: 200,
            color: 'green',
        }),
        ];
    }
}
export {
    KOF
}