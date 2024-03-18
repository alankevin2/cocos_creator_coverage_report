import { _decorator, Button, Component, Node, Sprite } from 'cc';

import { State } from '../logic/State';

const { ccclass, property } = _decorator;

@ccclass('MySceneMain')
export class MySceneMain extends Component {
    start() {
        const state = new State()
        alert(state.test(1234));
    }

    update(deltaTime: number) {

    }

    canWeTestThis(): boolean {
        console.log(window.navigator.userAgent);
        const a: Sprite = this.getComponent(Sprite); // Use the getComponent method from cc module
        return true
    }
}

