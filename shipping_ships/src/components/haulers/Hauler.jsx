import { useNavigate } from "react-router-dom";
import { getHaulers } from "../../services/getHaulers";
import { useEffect, useState } from "react";
export const Hauler = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getHaulers().then((haulerObj) => {
      setAllHaulers(haulerObj);
    });
  }, []);
  return (
    <>
      <h1 className="text-5xl">Haulers</h1>

      <div className="flex justify-center  bg-gray-300 rounded space-x-60">
        <div>
          {allHaulers.map((hauler) => {
            return (
              <div key={hauler.id}>
                Hauler:{hauler.name}
                <div>
                  <button
                    onClick={() => {
                      navigate(`/edit/${hauler.id}`);
                    }}
                  >
                    Edit Item
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
