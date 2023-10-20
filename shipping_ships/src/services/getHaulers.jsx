export const getHaulers = () => {
  return fetch("http://localhost:8000/haulers").then((res) => res.json());
};
