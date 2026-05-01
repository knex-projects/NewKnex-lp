
import { EventSection } from "@/src/components/section/eventsection";
import { OurHistorySection } from "@/src/components/section/ourhistorysection";
import { AboutUsSection, MovementsSection } from "@/src/components";

export default function Sobre() {
    return (
        <main className="bg-BackGround">
            <AboutUsSection />
            <EventSection />
            <OurHistorySection />
            <MovementsSection />
        </main>
    )
}