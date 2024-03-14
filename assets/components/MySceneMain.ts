import { _decorator, Button, Component, Node, Sprite, cc } from '../../__mocks__/ccMock';

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
        // const a: Sprite = cc.prototype.getComponent(this, Sprite); // Use the getComponent method from cc module
        return true
    }
}

