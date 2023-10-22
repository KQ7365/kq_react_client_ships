export const deleteSingleShip = (itemId) => {
  return fetch(`http://localhost:8000/ships/${itemId}`, { method: "DELETE" });
};
