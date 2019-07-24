import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
    <div className="user-info">
        <img src={userinfo.photo} />
        <h1><a href={`https://github.com/${userinfo.login}`}>{userinfo.name}</a></h1>
        <ul className='repos-info'>
          <li>- Repositorios: {userinfo.repos}</li>
          <li>- Seguidores: {userinfo.followers}</li>
          <li>- Seguindo: {userinfo.following}</li>
        </ul>
      </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    phoyo: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo