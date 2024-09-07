import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <style jsx>{`
        header {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        nav ul {
          list-style: none;
          padding: 0;
          display: flex;
          gap: 1rem;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
