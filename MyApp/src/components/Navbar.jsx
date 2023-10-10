import { NavLink } from 'react-router-dom';
import Wrapper from '../CSS/Navbar';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'> DRINK DEPOT</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
  



  
