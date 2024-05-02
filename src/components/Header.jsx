import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-content flex justify-center sm:justify-end">
          <div className="flex gap-x-7 justify-center items-center sm:justify-end">
            <Link to="/login" className="link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link-hover text-xs sm:text-sm">
              Create an Account
            </Link>
          </div>
        </div>
    </header>
  );
}

export default Header;
