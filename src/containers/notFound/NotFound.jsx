import { Link, useLocation } from "react-router-dom";

import { LayoutDefault } from "../../components/layout/Layout";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <LayoutDefault title="404">
      <div className="block">
        <h1 className="title has-text-danger">Error: 404</h1>
        <p className="subtitle">
          We couldn't find the page at <code>{pathname}</code>
        </p>
      </div>
      <div className="block">
        <Link className="title has-text-info nav-link" to="/">
          Go home
        </Link>
      </div>
    </LayoutDefault>
  );
};

export default NotFound;
