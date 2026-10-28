import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SkillBadge from '../components/SkillBadge';
import { toolGroups } from '../data/data';

export default function Tools() {
  return (
    <div className="page-transition">
      <Seo
        title="Tools yang Dikuasai"
        description="Daftar teknologi dan tools yang dikuasai Arfan Indra Kurniawan."
      />

      <section className="section-container">
        <SectionHeading
          title="Tools yang Dikuasai"
          subtitle="Teknologi dan alat yang saya gunakan sehari-hari"
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {toolGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.1}>
              <div>
                <h3 className="font-display text-lg font-bold mb-5 flex items-center gap-3" style={{ color: 'var(--color-text)' }}>
                  <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }} />
                  {group.category}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {group.tools.map((tool, ti) => (
                    <SkillBadge key={tool.name} name={tool.name} icon={tool.icon} index={ti} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
