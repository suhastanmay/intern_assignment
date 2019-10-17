import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Navbar sticky="top" bg="primary" variant="dark">
		    <Navbar.Brand>Intern App</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link><Link className="link" to='/'>Home</Link></Nav.Link>
		      <Nav.Link><Link className="link" to='/schedule'>Schedule</Link></Nav.Link>
		    </Nav>
		  </Navbar>
		<br />
		<App />
	</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
