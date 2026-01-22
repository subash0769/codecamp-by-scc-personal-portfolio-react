export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const defaultProjects: Project[] = [
  {
    title: "Ecommerce Website",
    description: "A website for selling products online.",
    link: "https://google.com",
    tags: ["React", "CSS"],
  },
  {
    title: "Banking Website",
    description: "A Banking Website.",
    link: "https://google.com",
    tags: ["TypeScript", "Vite"],
  },
  {
    title: "ERP System",
    description: "A ERP system for managing business operations.",
    link: "https://google.com",
    tags: ["Design", "UI"],
  },
];

export const projectsData: Project[] = [
  ...defaultProjects,
];
