System.register(["__unresolved_0", "cc", "@jest/globals", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, describe, test, expect, State, _crd;

  function _reportPossibleCrUseOfdescribe(extras) {
    _reporterNs.report("describe", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOftest(extras) {
    _reporterNs.report("test", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexpect(extras) {
    _reporterNs.report("expect", "@jest/globals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../State", _context.meta, extras);
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
      State = _unresolved_2.State;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b14b8y4hBCmKOTISrISO4d", "State.test", undefined);

      (_crd && describe === void 0 ? (_reportPossibleCrUseOfdescribe({
        error: Error()
      }), describe) : describe)('Math Functions', () => {
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('give 1 get \'1\'', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)().test(1)).toBe('1');
        });
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('give 2 get \'3\'', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)().test(2)).toBe('2');
        });
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('give 3 get \'3\'', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)().test(3)).toBe('3');
        });
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('give 4 get \'4\'', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)().test(1)).toBe('4');
        });
        (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
          error: Error()
        }), test) : test)('give any number but 1 or 2 or 3 get -1', () => {
          (_crd && expect === void 0 ? (_reportPossibleCrUseOfexpect({
            error: Error()
          }), expect) : expect)(new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)().test(9999)).toBe('-1');
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7d943ab95cf6fec7ecbdc07e2b17ee3c7b195ce.js.map