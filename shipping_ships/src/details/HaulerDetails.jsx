import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHaulerById } from "../services/getHaulerById";
import { getDocks } from "../services/getDocks";
import { editHauler } from "../services/editHauler";

export const HaulerDetails = () => {
  const [item, setItem] = useState([]);
  const [allDocks, setAllDocks] = useState([]);
  const [currentDockId, setCurrentDockId] = useState(0);

  const { haulersId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerById(haulersId).then((itemObj) => {
      setItem(itemObj);
      setCurrentDockId(itemObj.dock_id);
    });
    getDocks().then((dockObj) => {
      setAllDocks(dockObj);
    });
  }, [haulersId]);

  const handleSave = (e) => {
    e.preventDefault();

    const updateHauler = {
      id: item.id,
      name: item.name,
      dock_id: item.dock_id,
    };
    editHauler(updateHauler).then(() => {
      navigate("/haulingships");
    });
  };

  return (
    <>
      <h1 className="text-5xl">
        <u>Hauler:</u> <b>{item.name ? item.name : " "}</b>
      </h1>

      <fieldset>
        <label>Hauler Name:</label>
        <input
          name="note"
          value={item.name ? item.name : ""}
          id="editHauler"
          type="text"
          className="form-control"
          placeholder="Hauler Name"
          onChange={(e) => {
            const itemCopy = { ...item };
            itemCopy.name = e.target.value;
            setItem(itemCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="dock">Dock:</label>
        <select
          value={currentDockId}
          name="dockId"
          id="dock"
          type="select"
          className="form-control"
          onChange={(e) => {
            const itemCopy = { ...item };
            itemCopy.dock_id = e.target.value;
            setItem(itemCopy);
            setCurrentDockId(e.target.value);
          }}
        >
          <option value={0}>Select a Dock</option>
          {allDocks.map((dock) => {
            return (
              <option key={dock.id} value={dock.id}>
                {dock.location}
              </option>
            );
          })}
        </select>
      </fieldset>
      <button
        onClick={(e) => {
          handleSave(e);
        }}
      >
        Save
      </button>
    </>
  );
};
