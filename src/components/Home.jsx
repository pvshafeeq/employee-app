import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Button, Segment,Container } from 'semantic-ui-react'
import axios from 'axios';

const Home = () => {
  const [apiData, setApiData] = useState([]);

  var apiLink = "https://jsonplaceholder.typicode.com/users";

  const fetchData = () => {
    axios.get(apiLink).then(
      (resp) => {
        setApiData(resp.data);
      }
    ).catch()
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <Container text>
       <br></br>
    <div className="p-3 mb-2 bg-secondary text-white"><b>Employee Dashboard</b></div>
    <Segment>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data)=>{
 return (
  <Table.Row>
 <Table.Cell>{data.id}</Table.Cell>
   <Table.Cell>{data.name}</Table.Cell>
   <Table.Cell>{data.email}</Table.Cell>
 </Table.Row>
 ) 
        })}
    </Table.Body>
  </Table>
</Segment>
</Container>
  )
}

export default Home