import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import PropTypes from 'prop-types'
const AppContent = ({ userinfo, repos, starred }) => (
    <div className="App">
        <Search />
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions />}

        {repos.length && 
        <Repos 
          className='repos' 
          title='Repositorios:'
          repos={repos}
        />
        }

        {!!starred.length &&
        <Repos 
          className='starred' 
          title='Favoritos:'
          repos={starred}
        />
        }

      </div>
)


AppContent.propTypes = {
    userinfo: PropTypes.object.isRequired, 
    repos: PropTypes.array.isRequired, 
    starred: PropTypes.array.isRequired
}

export default AppContent