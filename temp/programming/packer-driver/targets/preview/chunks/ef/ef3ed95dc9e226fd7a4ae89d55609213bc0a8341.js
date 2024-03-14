System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, State, _dec, _class, _crd, ccclass, property, MySceneMain;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../logic/State", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29cf9T70c5NjrOeKOE3mWaR", "MySceneMain", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MySceneMain", MySceneMain = (_dec = ccclass('MySceneMain'), _dec(_class = class MySceneMain extends Component {
        start() {
          var state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)();
          alert(state.test(1234));
        }

        update(deltaTime) {}

        canWeTestThis() {
          return true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef3ed95dc9e226fd7a4ae89d55609213bc0a8341.js.map