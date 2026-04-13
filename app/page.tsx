import { AboutSection } from "@/components/AboutSection";
import { CareerGoalSection } from "@/components/CareerGoalSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { RecruiterSnapshot } from "@/components/RecruiterSnapshot";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050812] text-white">
        <HeroSection />
        <RecruiterSnapshot />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <CareerGoalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
