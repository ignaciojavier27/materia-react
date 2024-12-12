import { memo } from "react";

const MemoContadorHijo = ({ contador, sumar, restar }) => {
  console.log("Renderizando");
  return (
    <div
      style={{ padding: "10px", border: "2px solid black", marginTop: "10px" }}
    >
      <h4>Hijo del contador memo</h4>
      <button onClick={restar}>-</button>
      <button onClick={sumar}>+</button>

      <p>{contador}</p>
    </div>
  );
};

export default memo(MemoContadorHijo);
