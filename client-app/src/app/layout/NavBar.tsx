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
                    <Button as={NavLink} to='/createActivity' inverted content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};