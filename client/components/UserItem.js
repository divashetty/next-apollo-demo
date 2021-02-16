import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import './UserItem.css';
import Link from 'next/link'

const UserItem = data => {
 
  return (
    <li style={{listStyle: 'none'}}>
     
        <div>
          <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',transition: '0.3s',padding: '2rem', width: '20rem',margin: '1rem'}}>
          <img
                style={{borderRadius: '50%',height: '72px', marginRight: '20px', width: '72px'}}
                alt={data.name}
                src={data.photo}
              />
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.phoneNumber}</div>
            <div>{data.address}</div> 
          </div>
        </div>
     
    </li>
  
  );
};

const query = gql`
  query name {
    name
  }
`

export default graphql(query)(UserItem)

