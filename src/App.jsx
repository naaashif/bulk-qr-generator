import './App.css'
import QRcode from 'qrcode'
import { Analytics } from '@vercel/analytics/react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './pages/Input'
import Output from './pages/Output'


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
    <main className='h-screen flex flex-col overflow- bg-primary overflow-hidden'>
      <Analytics />
      <nav className="mt-4">
        <h1 onClick={()=> navigate('/')}
        className="text-3xl font-semibold text-secondary text-center underline">Bulk QR Code Generator</h1>
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
