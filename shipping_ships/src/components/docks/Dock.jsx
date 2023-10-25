import { useEffect, useState } from "react";
import { getDocksWithHaulers } from "../../services/getDocksWithHaulers";

export const Dock = () => {
  const [allDocksWithHaulers, setAllDocksWithHaulers] = useState([]);

  useEffect(() => {
    getDocksWithHaulers().then((dockAndHaulerObj) => {
      setAllDocksWithHaulers(dockAndHaulerObj);
    });
  }, []);
  return (
    <>
      <h1 className="text-5xl">Docks and Haulers assigned</h1>

      <div className="flex justify-center  bg-gray-300 rounded space-x-60">
        <div>
          {allDocksWithHaulers.map((dockWithHauler) => {
            return (
              <div key={dockWithHauler.id}>
                Dock Location:{dockWithHauler.location}
                {dockWithHauler?.haulers.map((hauler) => {
                  return (
                    <p key={hauler.id}>
                      Hauler:
                      {hauler.name}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
