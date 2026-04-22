import { ProfileHeader } from "@/components/profile-header"
import { FeaturedApps } from "@/components/featured-apps"
import { LinksSection } from "@/components/links-section"
import { LatestVideo } from "@/components/latest-video"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen max-w-md md:max-w-3xl mx-auto">
      <ProfileHeader />
      <FeaturedApps />
      <LinksSection />
      <LatestVideo />
      <Footer />
    </main>
  )
}
