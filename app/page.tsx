import HeroSection from "@/_components/sections/hero";
import AboutSection from "@/_components/sections/about";
import ProjectsSection from "@/_components/sections/projects";
import SkillsSection from "@/_components/sections/skills";
import ExperienceSection from "@/_components/sections/experience";
import TestimonialsSection from "@/_components/sections/testimonials";
import ContactSection from "@/_components/sections/contact";
import MarqueeDivider from "@/_components/marquee-divider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeDivider />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
