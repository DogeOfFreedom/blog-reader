import PropTypes from "prop-types";

export default function NavBar({ page }) {
  return (
    <>
      <nav>
        {page === "Home" ? (
          <>
            <a href="/Signup">
              <button className="actionBtn">Sign In</button>
            </a>
            <a href="/Logout">
              <button className="actionBtn">Log Out</button>
            </a>
          </>
        ) : (
          <>
            <a href="/">
              <button className="actionBtn">Home</button>
            </a>
          </>
        )}
      </nav>
    </>
  );
}

NavBar.propTypes = {
  page: PropTypes.string,
};
