import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFoundPage = () => {
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");
  return (
    <div className="container">
      <h1 className="heading">Page wasn't found.</h1>
      <Link className="goBackLink" to={goBackLink.current}>
        <FaArrowLeftLong /> Go back
      </Link>
    </div>
  );
};

export default NotFoundPage;
