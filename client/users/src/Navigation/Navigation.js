import { NavLink } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
a {
    padding: 20px;
}
`;

const Navigation = () => {
    return (
        <Div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
        </Div>
    )
}

export default Navigation
