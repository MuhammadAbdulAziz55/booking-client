import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Your has been logged out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((e) => console.error(e));
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="logo">Abdul-Aziz-Booking</span>
        </Link>
        <div
          id="navItems"
          className={`${menuVisible ? "#navItems active" : "#navItems"}`}
        >
          {user?.uid ? (
            <div onClick={() => setOpenModal(!openModal)}>
              {user?.photoUrl ? (
                <img src={user?.photoURL} alt="" className="userPhoto" />
              ) : (
                <img
                  src="https://i.ibb.co/cTPWD5X/Avatar-face.png"
                  alt=""
                  className="userPhoto"
                />
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          )}
        </div>
        {openModal && (
          <div className="profileModal">
            <button onClick={handleLogOut} className="logoutButton">
              Logout
            </button>
          </div>
        )}

        <div id="mobile" onClick={toggleMenu}>
          {menuVisible ? (
            <RxCross2 className="navIcon" />
          ) : (
            <BiMenuAltRight className="navIcon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
