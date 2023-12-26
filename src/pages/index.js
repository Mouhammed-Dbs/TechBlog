import Format from "../layout/format"
import TrendingSection from "../components/trending_section"
import LatestSection from "../components/latest_section"

export default function Home() {
  return (
    <>
      <Format>
        <TrendingSection></TrendingSection>
        <LatestSection></LatestSection>
      </Format>
    </>
  )
}
