import React from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';
import Starred from './components/starred';

function App() {
  return (
    <div className="App">
      <Search />
      <UserInfo />
      <Actions />
      <Repos 
        className='repos' 
        title='Repositorios:'
        repos={[{
          name: 'Nome do repositorio',
          link: '#'
        }]}
      />
      <Starred />
    </div>
  );
}

export default App;
