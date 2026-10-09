import './App.css'
import { useState } from 'react'
import Input from './pages/Input'
import Output from './pages/Output'
import { Route, Routes } from 'react-router-dom'
import QRcode from 'qrcode'
import { useNavigate } from 'react-router-dom'


function App() {
    const [prefix, setPrefix] = useState('')
    const [data, setData] = useState('')
    const [qrResults, setQrResults] = useState([])  

    const navigate = useNavigate()

    const handleGenerate = async () => {
        if (!data) {
            alert('are kettikana onnum type cheyyathe QR indakne')
            return
        }
        const lines = data.split('\n').map(l => l.trim()).filter(Boolean)
        const results = await Promise.all(
            lines.map(async (line) => ({
                text: line,
                dataUrl: await QRcode.toDataURL(line, { width: 300, margin: 2 })
            }))
        )
        setQrResults(results)
        navigate('/output')
    }

  return (
    <main className='h-screen flex flex-col overflow- bg-[#0063B2] overflow-hidden'>
      <nav className="mt-4">
        <h1 className="text-3xl font-semibold text-[#9CC3D5] text-center underline">Bulk QR Code Generator</h1>
      </nav>
      <div className='flex flex-1 mt-5 items- justify-center'>
        <Routes>
          <Route path='/'element={<Input prefix={prefix} setPrefix={setPrefix} data={data} setData={setData} onGenerate={handleGenerate} />} />
          <Route path='/output'element={<Output qrResults={qrResults} />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
