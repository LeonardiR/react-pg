import RatingSelector from "./components/RatingSelector"
import SecurityCodeInput from "./components/SecurityCodeInput"

function App() {

  return (
    <div className="w-5/12 m-auto p-8 flex flex-col items-center">
      <SecurityCodeInput digitsNumber={4} onSubmit={(digits) => console.log(digits)}></SecurityCodeInput>
      <RatingSelector onChange={(value) => console.log(value)}/>
    </div>
  )
}

export default App
