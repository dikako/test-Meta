(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.TreeView = factory());
}(this, (function () { 'use strict';

  /**
   * Custom view API.
   */
  class LiveView {
    constructor (options) {
      this.options = options;
      this.fails = [];
    }

    log (...args) {
      const ansi = require('ansi-escape-sequences');
      if (this.prevLineCount) {
        process.stdout.write(ansi.cursor.previousLine(this.prevLineCount));
      }
      console.log(ansi.format(args.join(' ')));
    }

    /**
     * Runner start.
     * @param {number}
     */
    start (count) {
      this.log();
      this.printTree();
    }

    /**
     * Test start
     * @param {Tom}
     */
    testStart (test) {
      this.printTree();
    }

    /**
     * Test passed.
     * @param {Tom}
     * @param {*}
     */
    testPass (test, result) {
      this.printTree();
    }

    /**
     * Test passed.
     * @param {Tom}
     * @param {*}
     */
    testFail (test, err) {
      this.printTree();
      this.fails.push(test);
    }

    /**
     * Test skipped.
     * @param {Tom}
     */
    testSkip (test) {
      this.printTree();
    }

    /**
     * @params {object} stats
     * @params {object} stats.fail
     * @params {object} stats.pass
     * @params {object} stats.skip
     * @params {object} stats.start
     * @params {object} stats.end
     */
    _end (stats) {
      stats = this.runner.stats;
      this.prevLineCount = 0;

      const failColour = stats.fail > 0 ? 'red' : 'white';
      const passColour = stats.pass > 0 ? 'green' : 'white';
      const skipColour = stats.skip > 0 ? 'grey' : 'white';
      const inProgressColour = stats.inProgress > 0 ? 'rgb(255,191,0)' : 'white';
      const statsSummary = `\nIn-progress: [${inProgressColour}]{${stats.inProgress}}, pass: [${passColour}]{${stats.pass}}, fail: [${failColour}]{${stats.fail}}, skip: [${skipColour}]{${stats.skip}}, todo: [${skipColour}]{${stats.todo}}.\n`;
      this.log(statsSummary);

      const fails = [];
      for (const test of this.fails) {
        const err = test.result;
        const parent = test.parent ? test.parent.name : '';
        fails.push(`[red]{⨯} [magenta]{${parent}} ${test.name}`);
        const lines = err.stack.split('\n').map(line => {
          return '  ' + line
        });
        fails.push(`\n${lines.join('\n').trimEnd()}\n`);
      }
      if (fails.length) {
        this.log(fails.join('\n'));
      }
    }

    printTree () {
      const ansi = require('ansi-escape-sequences');
      const groups = Array.from(this.runner.tom).filter(t => t.type === 'group');
      const lines = [];
      for (const group of groups) {
        const line = [ansi.erase.inLine(2)];
        const indent = ' '.repeat(group.level());
        line.push(`${indent}- [magenta]{${group.name}} `);
        for (const test of group.children) {
          if (test.type !== 'group') {
            if (test.state === 'pass') {
              line.push('[green]{✓}');
            } else if (test.state === 'fail') {
              line.push('[red]{⨯}');
            } else if (test.state === 'in-progress') {
              line.push('[rgb(255,191,0)]{•}');
            } else if (test.state === 'skipped') {
              line.push('[grey]{-}');
            } else if (test.state === 'pending') {
              line.push(`[white]{•}`);
            } else if (test.state === 'ignored') {
              line.push(`[yellow]{•}`);
            } else if (test.state === 'todo') {
              line.push(`[cyan]{•}`);
            }
          }
        }
        lines.push(line.join(''));
      }
      this.log(lines.join('\n'));
      this._end();
      this.prevLineCount = lines.length + 3;
    }

    /**
     * Option definitions.
     * @returns {OptionDefinition[]}
     */
    static optionDefinitions () {}
  }

  return LiveView;

})));
