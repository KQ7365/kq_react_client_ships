export const getDocks = () => {
  return fetch("http://localhost:8000/docks").then((res) => res.json());
};
