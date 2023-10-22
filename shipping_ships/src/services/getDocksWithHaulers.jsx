export const getDocksWithHaulers = () => {
  return fetch(" http://localhost:8000/docks?_expand=hauler").then((res) =>
    res.json()
  );
};
