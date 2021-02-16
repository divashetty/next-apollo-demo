import React,{useState,useEffect,Suspense, lazy} from 'react';

import UsersList from '../components/UsersList';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import request from "superagent";


const Users = (data) => {
  const [isLoading,setIsLoading]=useState(false);
  const [loadedUsers,setLoadedUsers]=useState();
  const [initialCount,setInitialCount]=useState(5);
  let tableBody=[];
  
   useEffect(()=>{
     const sendRequest = async () => {
       setIsLoading(true);
       try{
      const response= await request.get(`https://randomuser.me/api/?results=100`);
      const responseData = await response.body.results;
      setInitialCount(responseData);
      let partNumber= 5;
      if(!response.ok){
        throw new Error(responseData.message);
      }
      tableBody=responseData.slice(0, partNumber);
      setLoadedUsers(tableBody);
      setIsLoading(false);
    } catch (err){
      setError(err.message);
    }
    setIsLoading(false);
  };
  sendRequest();
},[] );
  

useEffect(() => {
}, []);


const seeMoreShowControl=()=> {
  setTimeout(function () {
    if (initialCount.length > loadedUsers.length) {
      let val= loadedUsers.length+20;
      let data= initialCount.slice(0, val);
      setLoadedUsers(data);
    } else {
    }
  }, 100);
}
  
  return (
    <React.Fragment>{!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    <button onClick={seeMoreShowControl}>Load More</button>
    </React.Fragment>
    );
};

const query = gql`
  query name {
    loadedUsers
  }
`

export default graphql(query)(Users)
