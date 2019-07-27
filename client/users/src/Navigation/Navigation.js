import { NavLink } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
a {
    padding: 20px;
    color: #1e114ad4;
    text-decoration: none;
}
.active {
        color: #690480d4;
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
