export interface Profile {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinLabel: string;
  summary: string[];
  photo: string;
}

export interface ExperienceGroup {
  category?: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  logo: string;
  groups: ExperienceGroup[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  category: string[];
  github: string;
}

export interface AcademicProject {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

export interface AcademicDocumentation {
  image: string;
  title?: string;
  caption?: string;
  date?: string;
}

export interface ToolItem {
  name: string;
  logo: string;
  description: string;
}


