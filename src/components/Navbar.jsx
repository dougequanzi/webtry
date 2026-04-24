import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: '首页', exact: true },
  { to: '/weiyuanzhijia', label: '委员之家' },
  { to: '/jiebies', label: '界别基本情况' },
  { to: '/center', label: '协商民主实践中心' },
  { to: '/platform', label: '委员履职平台' },
  { to: '/plan', label: '2026年履职计划' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <div className="logo-icon">政</div>
          <span className="logo-text">上城区政协委员通</span>
        </div>
        <div className="navbar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
