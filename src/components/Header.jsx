import { NavLink, Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"


export default function Header() {
    const location = useLocation()
    const showSearchBar = location.pathname.startsWith("/travels")

    return (

        <nav className="navbar navbar-expand-xl bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img width="50px" src="/logo.png" className="img-fluid rounded" alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHamburger"
                    aria-controls="menuHamburger" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuHamburger">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center">
                            <NavLink className="nav-link " to="/"> HOME </NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link" to="/contacts">RUBRICA</NavLink>
                        </li>
                        <li className="nav-item py-sm-2">
                            {!showSearchBar && <SearchBar />}
                        </li>
                    </ul>


                    {/*<form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Cerca..." aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Cerca</button>
                </form>*/}
                </div>
            </div>
        </nav>




    )

}


