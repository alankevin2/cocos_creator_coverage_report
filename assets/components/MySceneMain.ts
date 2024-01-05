import { _decorator, Component, Node } from 'cc';

import { State } from '../logic/State';

const { ccclass, property } = _decorator;

@ccclass('MySceneMain')
export class MySceneMain extends Component {
    start() {
        const state = new State()
        console.log(state.test(1234));
    }

    update(deltaTime: number) {
        
    }

    canWeTestThis(): boolean {
        return true
    }
}

