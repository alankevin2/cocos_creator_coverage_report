System.register(["__unresolved_0", "cc", "@jest/globals", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, describe, test, expect, MySceneMain, _crd;

  function _reportPossibleCrUseOfdescribe(extras) {
    _reporterNs.report("describe", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOftest(extras) {
    _reporterNs.report("test", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexpect(extras) {
    _reporterNs.report("expect", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMySceneMain(extras) {
    _reporterNs.report("MySceneMain", "../MySceneMain", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_jestGlobals) {
      describe = _jestGlobals.describe;
      test = _jestGlobals.test;
      expect = _jestGlobals.expect;
    }, function (_unresolved_2) {
      MySceneMain = _unresolved_2.MySceneMain;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b89f2x/cw9GSZ2edu49AFX5", "MySceneMain.test", undefined);

      (_crd && describe === void 0 ? (_reportPossibleCrUseOfdescribe({
        error: Error()
      }), describe) : describe)('Math Functions', () => {
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('canWeTestThis', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && MySceneMain === void 0 ? (_reportPossibleCrUseOfMySceneMain({
            error: Error()
          }), MySceneMain) : MySceneMain)().canWeTestThis()).toBe(true);
        }); // test('canWeTestWhenWeNeedUI', () => {
        //     expect(new MySceneMain().canWeTestWhenWeNeedUI()).toBe(true);
        //   });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=117d4a2cc66881fdbf1f4be8f93dc72106fe1677.js.map