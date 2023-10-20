export const getShips = () => {
  return fetch("http://localhost:8000/ships").then((res) => res.json());
};
