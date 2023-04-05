import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import styles from './styles/Header.module.css';

export const Header = () => {
  const setActiveNav = (e) => {
    e.target.className = "Header_nav-link__Pk1Nv nav-link active";
  }

  const { user } = useAuthContext();

  return (

    <header>

      <Link to='/' className={styles.title_link}>
        <p className={styles.title}>Dlagnekov & Co</p>
      </Link>

      <Nav justify variant="tabs" defaultActiveKey="/catalog" className={styles.navigation}>
        <Nav.Item>
          <Nav.Link as={Link} to="/catalog" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-1">Catalog</Nav.Link>
        </Nav.Item>
        {!user && (
          <>
            <Nav.Item>
              <Nav.Link as={Link} to="/register" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-2">Sign up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-3">Login</Nav.Link>
            </Nav.Item>
          </>
        )}
        {user && (
          <>
            <Nav.Item>
              <Nav.Link as={Link} to="/logout" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-4">Logout</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={`/profile/${user._id}`} className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-5">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/list-car" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-7">List a car</Nav.Link>
            </Nav.Item>
          </>
        )}
        <Nav.Item>
          <Nav.Link as={Link} to="/about" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-8">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contacts" className={styles["nav-link"]} onClick={setActiveNav} eventKey="link-9">Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};