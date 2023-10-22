import { useState, useEffect } from "react";
import { getShipsWithHaulers } from "../../services/getShipsWithHaulers";
import { deleteSingleShip } from "../../services/deleteSingleShip";

export const Ship = () => {
  const [allShipsAndHaulers, setAllShipsAndHaulers] = useState([]);

  useEffect(() => {
    getShipsWithHaulers().then((shipAndHaulerObj) => {
      setAllShipsAndHaulers(shipAndHaulerObj);
    });
  }, []);

  const handleDelete = (itemId) => {
    deleteSingleShip(itemId)
      .then(() => {
        // After successfully deleting the item, update the state by filtering out the deleted item.
        setAllShipsAndHaulers((prevShipsAndHaulers) =>
          prevShipsAndHaulers.filter(
            (shipWithHauler) => shipWithHauler.id !== itemId
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting item: ", error);
      });
  };

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
                    onClick={() => handleDelete(shipWithHauler.id)}
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
