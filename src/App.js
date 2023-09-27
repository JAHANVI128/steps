const messages = [
  "Learn React",
  "Apply for Jobs",
  "Invest your new Income"
];

export default function App(){
  const step = 1;

  return <div className="steps">
    {/* Hello React!! */}
    <div className="numbers">
      <div className={`${step >= 1 ? 'active' : ""}`}>1</div>
      <div className={`${step >= 2 ? 'active' : ""}`}>2</div>
      <div className={`${step >= 3 ? 'active' : ""}`}>3</div>
    </div>

    <p className="msg">
      Step {step}: {messages[step-1]}
    </p>

    <div className="buttons">
      <button style={
        {
          backgroundColor: '#3368ee',
          color: '#fff'
        }
      }>Previous</button>
      <button style={
        {
          backgroundColor: '#3368ee',
          color: '#fff'
        }
      }>Next</button>
    </div>
  </div>;
}