import React, { Component } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

class TerminalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terminal: null,
    };
    this.terminalRef = React.createRef();
  }

  componentDidMount() {
    const terminal = new Terminal();
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(this.terminalRef.current);
    terminal.onData(this.handleInput);
    this.setState({ terminal }, () => {
      fitAddon.fit();
      this.state.terminal.focus();
    });
  }

  handleInput = (data) => {
    this.state.terminal.write(data);
    if (data.charCodeAt(0) === 13) {
      const command = this.state.terminal.buffer.active.cursorRow
        .map(cell => cell.char)
        .join('');
      this.executeCommand(command);
    }
  };

  executeCommand = async (command) => {
    try {
      const response = await fetch('/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      const data = await response.json();
      this.state.terminal.writeln(data.output);
      this.state.terminal.prompt();
    } catch (error) {
      console.error(error);
      this.state.terminal.writeln(`Error executing command: ${command}`);
      this.state.terminal.prompt();
    }
  };

  render() {
    return (
      <div ref={this.terminalRef}></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Terminal Emulator</h1>
        <TerminalComponent />
      </div>
    );
  }
}

export default App;