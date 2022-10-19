import "./index.css"
import divider from "./images/pattern-divider-mobile.svg"
import dice from "./images/icon-dice.svg"
import { useEffect, useState } from "react";
function App()
{

  const [messgage, setMessage] = useState(
    {
      id: "2",
      advice: "Smile and the world smiles with you. Frown and you're on your own."
    }
  );

  console.log(messgage);

  const handleClick = async () =>
  {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
      if (response.ok) {
        const jsonResponse = await response.json();
        setMessage(jsonResponse.slip);
      }
    } catch (error) {
      alert(error);
    }
  }


  return (
    <div className="App h-screen w-screen font-Manrope m-0 p-0 box-border bg-Dark-Blue flex items-center justify-center">
      <div className="content w-1/3 h-2/5 bg-Dark-Grayish-Blue rounded-xl flex flex-col items-center justify-between relative drop-shadow shadow-xl p-10 Mobile:w-11/12 Tab:w-1/2 Desktop:h-1/5">
        <h4 className=" text-Neon-Green uppercase text-[14px] tracking-widest font-[100]">advice #{messgage.id}</h4>
        <h3 className="text-[20px] text-Light-Cyan text-center font-Manrope">
          "{messgage.advice}"
        </h3>
        <div className="w-full flex items-center justify-center">
          <img src={divider} alt="img divider" className="w-4/5 object-fill" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 w-10 bg-Neon-Green h-10 rounded-full flex items-center justify-center cursor-pointer p-3  shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:scale-150 transition duration-150 ease-in-out hover:shadow-Neon-Green"
          onClick={handleClick}
        >
          <img src={dice} alt="logo dice" />
        </div>
      </div>
    </div >
  );
}

export default App;
