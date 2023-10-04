import React from "react";

const Content = () => {

    const content =["earn", "grow","give"];

    const handleNameChange = () =>{
        return content[Math.floor((Math.random()*10)/3)];
    }
  const handleClick = (e) => {
    console.log(`${e.target.innerHTML}`);
  };

  return (
    <div>
        {/* when we call the function with (), it will load only once. if we want to load it
        for each event we need to call it as a anonyms function from the calling area */}
      <p>Let's {handleNameChange()} money</p>
      <br />
      <button onClick={(e)=> handleClick(e)}> Check click </button>
    </div>
  );
};

export default Content;
