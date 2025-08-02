import SecurityCodeInput from "./components/SecurityCodeInput"

function App() {

  return (
    <div className="w-5/12 m-auto p-8">
      <SecurityCodeInput digitsNumber={4} onSubmit={(digits) => console.log(digits)}></SecurityCodeInput>
    </div>
  )
}

export default App
