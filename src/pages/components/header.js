
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light " aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CALLision</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${router.pathname === '/home' ? 'active' : ''}`} aria-current="page" href="/home">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${router.pathname === '/users' ? 'active' : ''}`} aria-current="page" href="/users">Users Management</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Reports Management</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a className={`nav-link ${router.pathname === '/reports' ? 'active' : ''}`} href="/reports">Reports Management</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${router.pathname === '/users' ? 'active' : ''}`} href="#">Geolocation</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" type="submit">Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;