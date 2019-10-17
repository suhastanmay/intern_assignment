import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import useFetch from './utils/useFetch'

const Home = () => {
  let selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  }
  // fetch(`http://localhost:3004/data`).then(res => res.json()).then(data => console.log(data))
  const res = useFetch(`http://localhost:3004/data`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'PUT, GET, POST'

    }
  })
  if (!res.response) {
    return <>Loading...</>
  }
  return (
    <>
      {/*{
        res.response.map(({id, name}) => <p key={id}>{name}</p>)
      }*/}
      <BootstrapTable data={res.response} selectRow={selectRowProp} striped hover search>
        <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='start'>Start</TableHeaderColumn>
        <TableHeaderColumn dataField='end'>End</TableHeaderColumn>
      </BootstrapTable>
    </>
  )
}

export default Home