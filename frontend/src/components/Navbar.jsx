import React, { useState }  from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../Pages/restApi.json";


const Navbar = () => {
  

  const [show, setShow] = useState(false);
    return (
    <>
      <nav>
         <div className="logo"><img
            src="/User Account Icon.jpg"
            alt="Profile Logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          /></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => {
                return(
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
                );
            })}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;






// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { data } from "../Pages/restApi.json";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           backgroundColor: "white",
//           zIndex: 1000,
          
        
//         }}
        
//       >
//         <div className="logo">
//           <img
//             src="/User Account Icon.jpg"
//             alt="Profile Logo"
//             style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//           />
//         </div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//           <div className="links">
//             {data[0].navbarLinks.map((element) => {
//               return (
//                 <Link
//                   to={element.link}
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   key={element.id}
//                 >
//                   {element.title}
//                 </Link>
//               );
//             })}
//           </div>
//           <button className="menuBtn">OUR MENU</button>
//         </div>
//         <div className="hamburger" onClick={() => setShow(!show)}>
//           <GiHamburgerMenu />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

