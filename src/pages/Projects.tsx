import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';

export default function Projects() {
  return (
    <div className="page-transition">
      <Seo title="Proyek Pribadi" description="Proyek-proyek pribadi Arfan Indra Kurniawan di bidang AI, Data Engineering, dan Software Development." />

      <section className="section-container">
        <SectionHeading
          title="Proyek Pribadi"
          subtitle="Koleksi proyek yang telah saya bangun"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

