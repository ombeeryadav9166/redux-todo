import { useNavigate } from 'react-router';

const Sidebar = () => {
  const naviget = useNavigate();
  const routeChange = (path) => {
    naviget(path);
  };

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a
              href="javaScript:void(0);"
              className="nav-link align-middle px-0"
              onClick={() => {
                routeChange('/counter');
              }}
            >
              <span className="ms-1 d-none d-sm-inline">Counter</span>
            </a>
          </li>
         
          <li>
            <a
              href="javaScript:void(0);"
              className="nav-link align-middle px-0"
              onClick={() => {
                routeChange('/product-list');
              }}
            >
              <span className="ms-1 d-none d-sm-inline">Product List</span>
            </a>
          </li>
          <li>
            <a
              href="javaScript:void(0);"
              className="nav-link align-middle px-0"
              onClick={() => {
                routeChange('/todo');
              }}
            >
              <span className="ms-1 d-none d-sm-inline">Todo</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
