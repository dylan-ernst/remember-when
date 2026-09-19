import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ComingSoon } from './pages/ComingSoon'
import { Home } from './pages/Home'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<ComingSoon title="ABOUT US" />} />
          <Route path="services" element={<ComingSoon title="SERVICES" />} />
          <Route path="contact" element={<ComingSoon title="CONTACT" />} />
          <Route path="*" element={<ComingSoon title="PAGE NOT FOUND" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
