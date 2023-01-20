import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container fluid>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo'style={{marginRight: '10px'}} />
                    Reactor:Events
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item position='right'>
<<<<<<< HEAD
                    <Button as={NavLink} to='/createActivity' inverted content='Create Activity' />
=======
                    <Button as={NavLink} to='/createActivity' inverted content='Create Activity'/>
>>>>>>> 978ce0077f02a8ada2ce81bbaf22e4264880c5a2
                </Menu.Item>
            </Container>
        </Menu>
    )
};