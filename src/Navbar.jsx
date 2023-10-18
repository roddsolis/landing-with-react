
const Navbar = () => {

    let menuItems = ["Home", "About", "Services", "Content", 'Contact']

  return (

            <nav className="navbar navbar-dark bg-dark p-3 text-white border-primary border-bottom">
              <h3>Logo</h3>
              <ul className="d-flex align-items-center justify-content-center mb-0">
                {menuItems.map((items, index) => {
                  return (
                    <>
                      <li className="nav-item" key={index}>
                        <a className="nav-link" href="#">
                          {items}
                        </a>
                      </li>
                    </>
                  )
                })}
              </ul>
            </nav>
        )
}

export default Navbar