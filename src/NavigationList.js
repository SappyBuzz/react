import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


function NavigationList(){
    return(
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link href="/todo-list">Todo-List</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/counter">Counter</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="/quiz">Quiz</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
                {/* <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav> */}
            </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>

            {/* <Link to="/todo-list">
                <p>Todo-List</p>
            </Link>
            <Link to="/counter">
                <p>Counter</p>
            </Link>
            <Link to="/quiz">
                <p>Quiz</p>
            </Link> */}
        </div>

    );
}

export default NavigationList;