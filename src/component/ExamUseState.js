import React, { useState } from 'react';

function ExamUseState() {
  const [count, setCount] = useState(0);  // react hook useState .. 
  return (
    <div>
       <p>ExamUseState</p>
      <p>You clicked {count} times</p>
      <button   onClick={() => setCount(count + 1)}>
        Click me + 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me - 1
      </button>
    </div>
  );
}

export default ExamUseState;