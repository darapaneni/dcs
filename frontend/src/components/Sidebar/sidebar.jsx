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
