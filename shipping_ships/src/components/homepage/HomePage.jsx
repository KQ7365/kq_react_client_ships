import { useEffect, useState } from "react";
import "./HomePage.css";
import { getShips } from "../../services/getShips";
import { getDocks } from "../../services/getDocks";
import { getHaulers } from "../../services/getHaulers";

export const HomePage = () => {
  const [allShips, setAllShips] = useState([]);
  const [allDocks, setAllDocks] = useState([]);
  const [allHaulers, setAllHaulers] = useState([]);

  useEffect(() => {
    getShips().then((shipObj) => {
      setAllShips(shipObj);
    });

    getDocks().then((dockObj) => {
      setAllDocks(dockObj);
    });

    getHaulers().then((haulerObj) => {
      setAllHaulers(haulerObj);
    });
  }, []);

  return (
    <>
      <h1 className="text-5xl">Shipping Ships</h1>

      <div className="flex justify-center  bg-gray-300 rounded space-x-60">
        <div>
          <h2 className="text-3xl">Ship Names</h2>
          {allShips.map((ship) => {
            return <div key={ship.id}>{ship.name}</div>;
          })}
        </div>

        <div>
          <h2 className="text-3xl">Hauler Names</h2>
          {allHaulers.map((hauler) => {
            return <div key={hauler.id}>{hauler.name}</div>;
          })}
        </div>
        <div>
          <h2 className="text-3xl">Dock Locations</h2>
          {allDocks.map((dock) => {
            return <div key={dock.id}>{dock.location}</div>;
          })}
        </div>
      </div>
    </>
  );
};
