import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContentStatus } from './components/ContentStatus'
import { Layout } from './components/Layout'
import { useContent } from './content/useContent'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Services } from './pages/Services'

export function App() {
  /* Loaded once here: the header, footer and every page read the same settings. */
  const settings = useContent('settings')
  if (settings.status !== 'ready') return <ContentStatus {...settings} />

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout settings={settings.data} />}>
          <Route index element={<Home settings={settings.data} />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services settings={settings.data} />} />
          <Route path="contact" element={<Contact settings={settings.data} />} />
          <Route path="*" element={<NotFound settings={settings.data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
