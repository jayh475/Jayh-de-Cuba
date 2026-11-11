import type { ComponentType } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/base/navbar'
import { AuthProvider } from './contexts/firebase/authContext'

const pages = import.meta.glob<ComponentType>('./routes/*.tsx', {
  eager: true,
  import: 'default',
})

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {Object.entries(pages).map(([file, Page]) => {
          const name = file.slice('./routes/'.length, -'.tsx'.length)
          const path = name === '_index' ? '/' : `/${name}`
          return <Route key={file} path={path} element={<Page />} />
        })}
        <Route path="*" element={<h1 className="p-6">Page not found</h1>} />
      </Routes>
    </AuthProvider>
  )
}
