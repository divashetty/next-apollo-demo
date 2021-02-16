import React,{useState,useEffect,Suspense, lazy} from 'react';

import UsersList from '../components/UsersList';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import request from "superagent";


const Users = (data) => {
  const [isLoading,setIsLoading]=useState(false);
  const [initialLoad,setInitialload]=useState();
  const [loadedUsers,setLoadedUsers]=useState();
  const [initialCount,setInitialCount]=useState();
  let tableBody=[];
  let totalData=[];

  
   useEffect(()=>{
     const sendRequest = async () => {
       setIsLoading(true);
       try{
      const response= await request.get(`https://randomuser.me/api/?results=100`);
      const responseData = await response.body.results;
      setInitialCount(responseData);
      console.log(responseData);
      let partNumber= 5;
      if(!response.ok){
        throw new Error(responseData.message);
      }
      tableBody=responseData.slice(0, partNumber);
      setInitialload(tableBody);
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
  debugger;
  setTimeout(function () {
    if (initialCount.length > initialLoad.length) {
      let val= initialLoad.length+20;
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
