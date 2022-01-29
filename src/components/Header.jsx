import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
    <div className='container'>
        <Link to='/' className='brand'>
            GROW
        </Link>

        <nav>
            <Link to='/users'>Get Users</Link>
        </nav>
    </div>


        </header>
    );
}
export default Header;

