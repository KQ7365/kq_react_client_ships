export const getShipsWithHaulers = () => {
  return fetch("http://localhost:8000/ships?_expand=hauler").then((res) =>
    res.json()
  );
};
