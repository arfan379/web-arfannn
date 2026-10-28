import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import { tools } from '../data/data';

export default function Tools() {
  return (
    <div className="page-transition">
      <Seo
        title="Tools & Stack"
        description="Daftar teknologi, bahasa pemrograman, dan tools yang dikuasai Arfan Indra Kurniawan."
      />

      <section className="section-container">
        <SectionHeading
          title="Tools & Technologies"
          subtitle="Teknologi, bahasa pemrograman, dan framework yang saya gunakan sehari-hari"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <SkillBadge key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

