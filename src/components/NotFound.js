import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

export default function NotFound () {
    return <section className='notfound'>
        <h2>404</h2>
        <h3>Oops! Page Not Found</h3>
        <p>The page you're looking for does not seem to exist</p>
        <GoHomeButton>
            <Link to={'/'}>
                Go to Home
            </Link>
        </GoHomeButton>
    </section>
}

const GoHomeButton = styled(Button)({
    margin: '30px 0',
    width: '200px',
    height: '60px',
    backgroundColor: 'rgb(0, 192, 150)',
    "&:hover": {
        backgroundColor: 'rgb(0, 192, 150)'
    }
});
