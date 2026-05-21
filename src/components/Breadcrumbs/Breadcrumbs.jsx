import { Link } from 'react-router-dom';
import './_Breadcrumbs.scss';

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="breadcrumbs__item">
              {isLast ? (
                <span className="breadcrumbs__link">{item.label}</span>
              ) : (
                <Link to={item.path} className="breadcrumbs__link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
