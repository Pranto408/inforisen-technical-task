import Advantages from "./components/Advantages"
import CtaBanner from "./components/CtaBanner"
import FAQSection from "./components/FAQSection"
import GrowthTimeline from "./components/GrowthTimeline"
import HeroBanner from "./components/HeroBanner"
import PaymentMethods from "./components/PaymentMethods"
import ProcessSection from "./components/ProcessSection"
import ServicesSection from "./components/ServicesSection"
import StatsSection from "./components/StatsSection"


function App() {


  return (
    <div>
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PaymentMethods />
      <GrowthTimeline />
      <Advantages />
      <FAQSection />
      <CtaBanner />
    </div>
  )
}

export default App
