import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { ContactPage } from './pages/Contact'
import { FaqPage } from './pages/Faq'
import { FeaturesPage } from './pages/Features'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { PricingPage } from './pages/Pricing'
import { PrivacyPage } from './pages/Privacy'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}
