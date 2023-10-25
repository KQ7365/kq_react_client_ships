export const getHaulerById = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}/`).then((res) =>
    res.json()
  );
};
