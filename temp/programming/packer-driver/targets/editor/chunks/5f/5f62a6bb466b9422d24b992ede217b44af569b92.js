System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, State, _crd;

  _export("State", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45828xavQxDl5+pEvMPDQVn", "State", undefined);

      _export("State", State = class State {
        test(num) {
          switch (num) {
            case 1:
              return '1';

            case 2:
              return '2';

            case 3:
              return '3';

            default:
              return '-1';
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f62a6bb466b9422d24b992ede217b44af569b92.js.map