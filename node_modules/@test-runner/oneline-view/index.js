const ansi = require('ansi-escape-sequences')
const DefaultView = require('@test-runner/default-view')

class OnelineView extends DefaultView {
  constructor (options) {
    super(options)
    this.options.viewShowStarts = true
    this.firstLine = true
    this.fails = []
  }

  start () {
  }

  log (...args) {
    const msgSize = process.stdout.columns - 30
    const msg = args.join(' ')
    const stringLength = require('string-length')
    if (!this.firstLine) {
      process.stdout.write(ansi.cursor.up(1) + ansi.erase.inLine(2))
    }
    let toDisplay = msg.substr(0, msgSize)
    let msgLen = stringLength(toDisplay)
    let paddingRequired = msgSize - msgLen
    toDisplay = msg.substr(0, msgSize + paddingRequired)
    msgLen = stringLength(toDisplay)
    paddingRequired = msgSize - msgLen

    const stats = this.runner.stats
    const failColour = stats.fail > 0 ? 'red' : 'white'
    const passColour = stats.pass > 0 ? 'green' : 'white'
    const skipColour = stats.skip > 0 ? 'grey' : 'white'
    const todoColour = stats.todo > 0 ? 'grey' : 'white'
    const inProgressColour = stats.inProgress > 0 ? 'rgb(255,191,0)' : 'white'
    const statsSummary = ansi.format(`In-progress: [${inProgressColour}]{${stats.inProgress}}, pass: [${passColour}]{${stats.pass}}, fail: [${failColour}]{${stats.fail}}, skip: [${skipColour}]{${stats.skip}}, todo: [${skipColour}]{${stats.todo}}.`)
    console.log(statsSummary, ansi.format(toDisplay) + ' '.repeat(paddingRequired), ansi.style.reset)
    this.firstLine = false
  }

  testFail (test, err) {
    const indent = ' '.repeat(test.level())
    const parent = test.parent ? test.parent.name : ''
    this.fails.push(ansi.format(`${indent}[red]{⨯} [magenta]{${parent}} ${test.name}`))
    const lines = this.getErrorMessage(err).split('\n').map(line => {
      const indent = ' '.repeat(test.level() + 2)
      return indent + line
    })
    this.fails.push(ansi.format(`\n${lines.join('\n').trimEnd()}\n`))
  }

  getErrorMessage (err) {
    if (this.options.viewHideErrStack) {
      return err.message
    } else {
      return err.stack
    }
  }

  /**
   * @params {object} stats
   * @params {object} stats.fail
   * @params {object} stats.pass
   * @params {object} stats.skip
   * @params {object} stats.start
   * @params {object} stats.end
   */
  end (stats) {
    this.log(ansi.format(`Completed in ${stats.timeElapsed()}ms.`))
    if (this.fails.length) {
      console.log()
      console.log(this.fails.join('\n'))
    }
  }

  static optionDefinitions () {
    return []
  }
}

module.exports = OnelineView
