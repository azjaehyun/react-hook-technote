import React, { useState, useEffect  } from 'react';

const  ExamUseEffect = () => {

  const [count, setCount] = useState(0);

  
  useEffect(() => {  
    document.title = `You  ${count} times`;
  },[count]); // count값이 변경되면 화면도 다시 재 랜더링 . 중요 !! 한번만 랜더링 되고 싶으면 아래와 같이 [] 빈 배열 주입.

  /*
  useEffect(() => {  
    document.title = `You  ${count} times`;
  },[count]); //  [] 빈 아규먼트를 넣으면 한번만 렌더링 되고 다시는 렌더링 되지 않음.

  */

 // style={{ background: theme.background, color: theme.foreground }}
  return (
    <div>
         <p>ExamUseEffect</p>
      <p>You clicked {count} times</p>
      <button  onClick={() => setCount(count + 1)}>
        Click me + 1
      </button>
      <button  onClick={() => setCount(count - 1)}>
        Click me - 1
      </button>
    </div>
  );
}

export default ExamUseEffect; 