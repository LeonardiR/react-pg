import EmailInput from "./components/EmailInput"

function App() {

  return (
    <div className="w-5/12 m-auto p-8">
     <EmailInput onChange={(value) => console.log(value)}></EmailInput>
    </div>
  )
}

export default App
