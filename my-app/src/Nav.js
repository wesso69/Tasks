import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/add_person'>Add Person</Link>
        </div>
    );
};

export default Nav;