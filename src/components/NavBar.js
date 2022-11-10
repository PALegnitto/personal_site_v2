import Pages from "../pages"

const pageList = Object.keys(Pages);

const NavBar = ({handleViewChange,name}) => {

  return (
    <nav>
      <div className="navName">
        { "{" + name + "}"}
      </div>
      <div>
        <ul>
          {pageList.map((x) => (
            <button
              className="navButton"
              onClick={e => handleViewChange(e)}
              key={x}
            >{x}</button>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;