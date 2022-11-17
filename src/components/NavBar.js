import Pages from "../pages"
import "./NavBar.css"

const pageList = Object.keys(Pages);

const NavBar = ({handleViewChange,name}) => {

  return (
    <nav>
      <div className="navName">
        { "{" + name + "}"}
      </div>
      <div>
        <ul>
          {pageList.map((page) => (
            <button
              className="navButton"
              onClick={() => handleViewChange(page)}
              key={page}
            >{page}</button>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;