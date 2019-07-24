import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        name: 'Junior Fernandes',
        photo: 'https://avatars1.githubusercontent.com/u/42782419?v=4',
        login: 'JuniorFernades',
        repos: 12,
        followers: 10,
        following: 12
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]

    }
  }

  render () {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  } 
}

export default App;
