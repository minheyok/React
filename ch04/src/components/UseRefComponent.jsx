import React from "react";
import { useRef } from "react";

export const UseRefComponent = () => {
  // ref 선언
  const refUid = useRef();
  const refName = useRef();

  // 핸들러
  const btnlHandler = () => {
    const uid = refUid.current.value;

    alert(uid);
  };

  const btn2Handler = () => {
    const name = refName.current.value;
    alert(name);
  };

  return (
    <div className="UseRefComponent">
      <h4>UseRefComponent</h4>
      <p>
        <input type="text" name="uid" ref={refUid} />
        <button onClick={btnlHandler}>확인</button>
      </p>
      <p>
        <input type="text" name="name" ref={refName} />
        <button onClick={btn2Handler}>확인</button>
      </p>
    </div>
  );
};
