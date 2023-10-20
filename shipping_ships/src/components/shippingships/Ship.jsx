import { useState, useEffect } from "react";
import { getShipsWithHaulers } from "../../services/getShipsWithHaulers";

export const Ship = () => {
  const [allShipsAndHaulers, setAllShipsAndHaulers] = useState([]);

  useEffect(() => {
    getShipsWithHaulers().then((shipAndHaulerObj) => {
      setAllShipsAndHaulers(shipAndHaulerObj);
    });
  }, []);

  return (
    <>
      <h1 className="text-5xl">Ships with their Haulers</h1>

      <div className="flex justify-center  bg-gray-300 rounded space-x-60">
        <div>
          {allShipsAndHaulers.map((shipWithHauler) => {
            return (
              <div key={shipWithHauler.id}>
                Ship name:{shipWithHauler.name} Hauler:
                {shipWithHauler.hauler.name}
                <div>
                  <button
                    className="deleteButton"
                    // onClick={() => handleDeleteItemClick(noteObj.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
//TODO: Need to finish Delete function - 1)Make Delete Service 2)Delete function 3)do onClick
