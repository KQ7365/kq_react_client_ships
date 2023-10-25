export const getDocksWithHaulers = () => {
  return fetch("http://localhost:8000/docks?_embed=hauler").then((res) =>
    res.json()
  );
};
