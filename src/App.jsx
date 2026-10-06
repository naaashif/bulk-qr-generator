import './App.css'
import { useState } from 'react'
import Input from './pages/Input'
import Output from './pages/Output'
function App() {
  const [showOutput, setShowOutput] = useState(false)

  return (
    <main className='h-screen flex flex-col overflow- bg-[#0063B2] overflow-hidden'>
      <nav className="mt-4">
        <h1 className="text-3xl font-semibold text-[#9CC3D5] text-center underline">Bulk QR Code Generator</h1>
      </nav>
      <div className='flex flex-1 mt-5 items- justify-center'>
        {showOutput ? <Output /> : <Input onGenerate={() => setShowOutput(true)} />}
      </div>
    </main>
  )
}

export default App
