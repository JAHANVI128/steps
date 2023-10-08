import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for Jobs",
  "Invest your new Income"
];

export default function App(){
  return(
    <div>
      <Steps/>
      <Steps/>
    </div>
  );
}

function Steps(){
  const [step,setStep] = (useState(1))
  const [isOpen,setIsOpen] = useState(true)

  // const [test,setTest] = useState({name: "Jahanvi"});
  // console.log(arr);
  
  // const step = 1;
  function handlePrevious(){
    // alert("Previous")
    if(step > 1){
      // setStep(step - 1)
      setStep((s) => s-1);
    }
  }

  function handleNext(){
    // alert("Next")
    if(step < 3){
      // setStep(step + 1);
      // setStep(step + 1);
      setStep((s) => s+1)
      setStep((s) => s+1)
    }
    // step = step + 1;
    // test.name = "Janu";
    // setTest({name: "janu"})
  }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>

      { isOpen && (
        <div className="steps">
          {/* Hello React!! */}
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ""}>1</div>
            <div className={step >= 2 ? 'active' : ""}>2</div>
            <div className={step >= 3 ? 'active' : ""}>3</div>
          </div>

          <p className="msg">
            Step {step}: {messages[step-1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button style={
              {
                backgroundColor: '#3368ee',
                color: '#fff'
              }
            } onClick={handlePrevious}>Previous</button>
            {/* onMouseEnter={() => alert("TEST")} */}
            <button style={
              {
                backgroundColor: '#3368ee',
                color: '#fff'
              }
            } onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}