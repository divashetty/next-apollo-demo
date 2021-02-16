import React from 'react';

import UserItem from './UserItem';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const UsersList = data => {
  if (data.items.length === 0) {
    return (
      <div className="center">
       
          <h2>No users found.</h2>
       
      </div>
    );
  }

  return (
    
    <ul className="users-list">
      {data.items.map(user => (
        <UserItem
          key={user.login.uuid}
          id={user.id.value}
          name={user.login.username}
          photo={user.picture.medium}
          email={user.email}
          phoneNumber={user.phoneNumber}
          address={user.location.country}
        />
      ))}
    </ul>
  );
};

const query = gql`
  query name {
    items
  }
`

export default graphql(query)(UsersList)

