// import { Button, Menu, Typography, Avatar } from "antd";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   HomeOutlined,
//   MoneyCollectOutlined,
//   MenuOutlined,
//   BulbOutlined,
//   FundOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";

// import icon from "../assets/images/cryptocurrency.png";

// const Navbar: React.FC<{}> = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleMenuToggle = () => {
//     setToggle(!toggle);
//   };
//   return (
//     <div className="nav-container">
//       <div className="logo-container-box">
//         <div className="logo-container">
//           <Avatar src={icon} size="large" />
//           <Typography.Title level={2} className="logo">
//             <Link to="/"> Cryptobox </Link>
//           </Typography.Title>
//         </div>
//         {toggle ? (
//           <div className={`menu-container ${toggle ? "block" : "hidden"}`}>
//             <CloseOutlined className="text-white" onClick={handleMenuToggle} />
//             <Menu theme="dark">
//               <Menu.Item icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item icon={<FundOutlined />}>
//                 <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//               </Menu.Item>
//               <Menu.Item icon={<MoneyCollectOutlined />}>
//                 <Link to="/exchanges">Exchanges</Link>
//               </Menu.Item>
//               <Menu.Item icon={<BulbOutlined />}>
//                 <Link to="/news">News</Link>
//               </Menu.Item>
//             </Menu>
//           </div>
//         ) : (
//           <MenuOutlined className="text-white" onClick={handleMenuToggle} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { Button, Menu, Typography, Avatar } from "antd";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   HomeOutlined,
//   MoneyCollectOutlined,
//   MenuOutlined,
//   BulbOutlined,
//   FundOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";

// import icon from "../assets/images/cryptocurrency.png";

// const Navbar: React.FC<{}> = () => {
//   const [toggle, setToggle] = useState(true);

//   const handleMenuToggle = () => {
//     setToggle(!toggle);
//   };
//   return (
//     <div className="nav-container">
//       <div className="logo-container-box flex md:flex-col ">
//         <div className="logo-container">
//           <Avatar src={icon} size="large" />
//           <Typography.Title level={2} className="logo">
//             <Link to="/"> Cryptobox </Link>
//           </Typography.Title>
//         </div>
//         <div className="">
//           <MenuOutlined
//             className={`text-white menu-icon ${toggle ? "block" : "hidden"}`}
//             // className={`text-white menu-container ${
//             //   toggle ? "hidden" : "block"
//             // }`}
//             onClick={handleMenuToggle}
//           />
//           <div className={`menu-container ${toggle ? "hidden" : "block"}`}>
//             <CloseOutlined
//               className="text-white show-icon"
//               onClick={handleMenuToggle}
//             />
//             <Menu theme="dark" className="show-items">
//               <Menu.Item icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item icon={<FundOutlined />}>
//                 <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//               </Menu.Item>
//               <Menu.Item icon={<MoneyCollectOutlined />}>
//                 <Link to="/exchanges">Exchanges</Link>
//               </Menu.Item>
//               <Menu.Item icon={<BulbOutlined />}>
//                 <Link to="/news">News</Link>
//               </Menu.Item>
//             </Menu>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Menu, Typography, Avatar } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
  BulbOutlined,
  FundOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import icon from "../assets/images/cryptocurrency.png";

const Navbar: React.FC<{}> = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="nav-container">
      <div className="logo-container-box flex md:flex-col ">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to="/"> Cryptobox </Link>
          </Typography.Title>
        </div>
        <div className="">
          <MenuOutlined
            className={`text-white menu-icon show-icon  block md:hidden ${
              toggle ? "block" : "hidden"
            }`}
            // className={`text-white menu-container ${
            //   toggle ? "hidden" : "block"
            // }`}
            onClick={handleMenuToggle}
          />
          <CloseOutlined
            className={`text-white menu-icon show-icon  block md:hidden ${
              toggle ? "hidden" : "block"
            }`}
            onClick={handleMenuToggle}
          />
          <div
            className={`menu-container  block ${toggle ? "hidden" : "block"}`}
          >
            <Menu theme="dark" className="show-items">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
