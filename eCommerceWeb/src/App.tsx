
import BannerSection from './components/BannerSection'
import Blog from './components/Blog'
import { Category } from './components/Category'
import { FeatureSection } from './components/FeatureSection'
import { FeatureSectionBreackfast } from './components/FeatureSectionBreackfast'
import { FeatureSectionFruits } from './components/FeatureSectionFruits'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/NewsLatter'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreackfast />
      <BannerSection />
      <Blog />
      <Newsletter />
      <FeatureSection />
      <Footer />
    </main>
  )
}
export default App
