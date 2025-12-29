// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useAuth } from "../hooks/useAuth";

// // export default function Navbar() {
// //   const { user, logout } = useAuth();
// //   const nav = useNavigate();

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //       <div className="container">
// //         <Link className="navbar-brand" to="/">SmartEvents</Link>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/events">Browse Events</Link>
// //             </li>
// //             {user && (
// //               <>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/create">Create</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/dashboard">Dashboard</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/analytics">Analytics</Link>
// //                 </li>
// //               </>
// //             )}
// //           </ul>

// //           <div className="d-flex align-items-center">
// //             {user ? (
// //               <>
// //                 <button
// //                   className="btn btn-sm btn-outline-danger ms-3"
// //                   onClick={() => { logout(); nav("/login"); }}
// //                 >
// //                   Logout
// //                 </button>
// //               </>
// //             ) : (
// //               <Link className="btn btn-primary btn-sm ms-3" to="/login">Login</Link>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const nav = useNavigate();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//       <div className="container">
//         <Link className="navbar-brand fw-bold" to="/">SmartEvents</Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/events">Browse Events</Link>
//             </li>
//             {user && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/create">Create</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/analytics">Analytics</Link>
//                 </li>
//               </>
//             )}
//           </ul>

//           <div className="d-flex align-items-center">
//             {user ? (
//               <>
//                 <span className="me-3 small text-muted d-none d-md-inline">
//                   {user.email}
//                 </span>
//                 <button
//                   className="btn btn-sm btn-outline-danger"
//                   onClick={() => { logout(); nav("/login"); }}
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link className="btn btn-primary btn-sm" to="/login">Login</Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  // Load previously saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg premium-navbar shadow-sm">
      <div className="container-fluid px-4">

        {/* Branding */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          SmartEvents
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">

          {/* Left Menu */}
          <ul className="navbar-nav me-auto ms-4 gap-3">
            <li className="nav-item">
              <Link className="nav-link nav-modern" to="/events">
                Browse Events
              </Link>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav-modern" to="/create">
                    Create Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-modern" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-modern" to="/analytics">
                    Analytics
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-3">

            {/* Theme Toggle Button */}
            <button className="theme-btn" onClick={toggleTheme}>
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {!user && (
              <Link className="btn btn-primary btn-sm px-3" to="/login">
                Login
              </Link>
            )}

            {user && (
              <>
                <span className="fw-semibold small">{user.email}</span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => { logout(); nav("/login"); }}
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>

      </div>
    </nav>
  );
}
