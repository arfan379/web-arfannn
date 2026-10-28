import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/data';

export default function Experience() {
  return (
    <div className="page-transition">
      <Seo title="Work Experience" description="Pengalaman kerja Arfan Indra Kurniawan di bidang AI, Data Engineering, dan Software Development." />

      <section className="section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="Perjalanan karir dan pengalaman profesional"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
