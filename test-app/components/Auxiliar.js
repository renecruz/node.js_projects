import react, { useEffect, useState } from "react";

export default function Auxiliar() {
  const [items, setItems] = react.useState([]);

  const peticion = async () => {
    const res = await fetch("http://localhost:3000/api/calles/");
    const calles = await res.json();
    setItems(calles);
    console.log(calles);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>
            ID: {item.calle_id} {item.nombre}
          </h3>
          <p>{item.colonia_id}</p>
        </div>
      ))}
    </div>
  );
}
