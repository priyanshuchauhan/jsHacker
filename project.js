// Create the index.ts file
const code = `
import React, { Component } from 'react';
import Hello from './Hello';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('myDiv'));
`;

// Create the index.html file
const html = `<div id='myDiv'></div>`
  
// Create the project payload.
const project = {
    // files: {['src/index.js', 'src/Hello.js', 'src/style.css'],
    title: 'Priyanshu',
    description: 'project',
    template: 'create-react-app',
    // template: 'typescript',
    settings: {
      compile: {
        trigger: 'auto',
        action: 'refresh',
        clearConsole: true,
      }
    },
    files: {
      'index.js': code,
      'index.html': html
    },
    tags: ['stackblitz', 'sdk'] ,
    "dependencies": {
      "react": "16.5.0",
      "react-dom": "16.5.0",
       moment: '*' // * = latest version
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    },
    "devDependencies": {
      "react-scripts": "latest"
    }
  };
  