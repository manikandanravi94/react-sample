import React from "react";

const Content = () => {

    const content =["earn", "grow","give"];

    const handleNameChange = () =>{
        return content[Math.floor((Math.random()*10)/3)];
    }
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <p>Let's {handleNameChange()} money</p>
      <br />
      <button onClick={handleClick}> Check click </button>
    </div>
  );
};

export default Content;
