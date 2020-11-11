import React, { useState } from "react";

function App() {
  var [time, setTime] = useState(new Date().toLocaleTimeString())

  //let time = new Date().toLocaleTimeString();
  //console.log(time);

  function getTime(){
    var newTime = new Date().toLocaleTimeString()
    setTime(time = newTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
