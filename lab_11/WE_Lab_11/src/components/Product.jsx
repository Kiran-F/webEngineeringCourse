import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <nav>
        <ul>
          <li><Link to="/products/car">Cars</Link></li>
          <li><Link to="/products/bike">Bikes</Link></li>
        </ul>
      </nav>

      <Outlet />  {/* Needed for nested routes */}
    </div>
  );
}

export function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

export function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}