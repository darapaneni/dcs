// import React, { useState } from 'react';

// function SideBar() {
//     const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div style={styles.sideBar}>
//       <h2 style={styles.title}>Menu</h2>
//       <ul style={styles.menu}>

//         {/* For Businesses drop down category */}
//         <li
//           style={styles.menuItem}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <a href="#forbusiness" style={styles.link}>For Businesses</a>
//           {isHovered && (
//             <ul style={styles.subMenu}>
//             <li style={styles.subMenu}><a href="#stamp it" style={styles.link}>Stamp it</a></li>
//             <li style={styles.subMenu}><a href="#inkit" style={styles.link}>Ink it</a></li>
//             <li style={styles.subMenu}><a href="#linkit" style={styles.link}>Link it</a></li>
//             <li style={styles.subMenu}><a href="#scanit" style={styles.link}>Scan it</a></li>
//             <li style={styles.subMenu}><a href="#contractit" style={styles.link}>Contract it</a></li>
//             </ul>
//           )}
//         </li>


//        {/* For Customers drop down category */}
//         <li
//           style={styles.menuItem}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <a href="#forcustomers" style={styles.link}>For Customers</a>
//           {isHovered && (
//             <ul style={styles.subMenu}>
//             <li style={styles.subMenu}><a href="#property" style={styles.link}>property</a></li>
//             <li style={styles.subMenu}><a href="#personal" style={styles.link}>personal</a></li>
//             <li style={styles.subMenu}><a href="#business" style={styles.link}>business</a></li>
//             </ul>
//           )}
//         </li>



//         {/* For pricing drop down category */}
//         <li style={styles.menuItem}><a href="#pricing" style={styles.link}>Pricing</a></li>


//        {/* For Request service drop down category */}
//         <li
//           style={styles.menuItem}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <a href="#requestservice" style={styles.link}>Request Service</a>
//           {isHovered && (
//             <ul style={styles.subMenu}>
//             <li style={styles.subMenu}><a href="#requestservice" style={styles.link}>Request Service</a></li>
//             <li style={styles.subMenu}><a href="#printndeliver" style={styles.link}>Print n Deliver</a></li>
//             <li style={styles.subMenu}><a href="#generalquery" style={styles.link}>General query</a></li>
//             </ul>
//           )}
//         </li>

//       </ul>
//     </div>
//   );
// }

// const styles = {
//   sideBar: {
//     backgroundColor: '#ffe4c4',
//     width: '200px',
//     height: '200vh',
//     padding: '20px',
//     //position: 'fixed',
//     top: '0',
//     left: '0',
//   },
//   title: {
//     color: 'black',
//     textAlign: 'center',
//   },
//   menu: {
//     listStyleType: 'none',
//     padding: '0',
//   },
//   menuItem: {
//     marginBottom: '15px',
//   },
//   link: {
//     color: 'black',
//     textDecoration: 'none',
//     display: 'block',
//     padding: '10px',
//   },
//   linkHover: {
//     backgroundColor: '#575757',
//   },
// };

// export default SideBar;

// Sidebar.jsx
import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: 'Car Parking Drafting', path: '/car-parking-drafting' },
    { name: 'House Rental Drafting', path: '/house-rental-drafting' },
    { name: 'Commercial Office Agreement Drafting', path: '/commercial-office-agreement-drafting' },
    { name: 'Commercial Shop Rental Drafting', path: '/commercial-shop-rental-drafting' },
    { name: 'Room Agreement Drafting', path: '/room-agreement-drafting' },
    { name: 'Office Sharing Agreement Drafting', path: '/office-sharing-agreement-drafting' },
    { name: 'Sale Deed Drafting', path: '/sale-deed-drafting' },
    { name: 'Settlement Of Rental Agreement Drafting', path: '/settlement-of-rental-agreement-drafting' },
    { name: 'Commercial Lease Drafting', path: '/commercial-lease-drafting' },
    { name: 'Quick Rental Drafting', path: '/quick-rental-drafting' },
    { name: 'Residential Lease Drafting', path: '/residential-lease-drafting' },
    { name: 'Renting in a Mall Drafting', path: '/renting-in-a-mall-drafting' },
    { name: 'Paying Guest Agreement Drafting', path: '/paying-guest-agreement-drafting' },
    { name: 'Leave And License Drafting', path: '/leave-and-license-drafting' },
    { name: 'NOC From Landlord Drafting', path: '/noc-from-landlord-drafting' },
    { name: 'Power Of Attorney Drafting', path: '/power-of-attorney-drafting' },
  ];

  return (
    <div className="sidebar">
      <h2>Drafting Types</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
