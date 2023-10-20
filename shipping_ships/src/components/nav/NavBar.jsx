import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-center bg-slate-400 rounded">
      <ul className="bg-blue-700 p-4 rounded-lg flex justify-around items-center bg-slate-600 border-4 border-white rounded-3xl p-2 w-11/12">
        <li>
          <Link to="/" className="text-white">
            HomePage
          </Link>
        </li>
        <li>
          <Link to="/shippingships" className="text-white">
            Ships
          </Link>
        </li>
        <li>
          <Link to="/haulingships" className="text-white">
            Haulers
          </Link>
        </li>
        <li>
          <Link to="/docks" className="text-white">
            Docks
          </Link>
        </li>
      </ul>
    </div>
  );
};
