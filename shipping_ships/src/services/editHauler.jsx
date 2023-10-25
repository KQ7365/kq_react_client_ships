export const editHauler = (item) => {
  return fetch(`http://localhost:8000/haulers/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
