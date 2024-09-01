export type Project = {
  title: string;
  subtitle: string;
  desc: string;
  github: string;
  liveDemo: string;
};

export const projects: Project[] = [
  {
    title: "LiveCode",
    subtitle: "HTML, CSS, and JS Editor",
    desc: "LiveCode is an online editor that allows you to write and preview HTML, CSS, and JavaScript code in real-time. It features a dynamic interface with theme switching, making it a powerful tool for developers to test and visualize their code instantly.",
    github: "https://github.com/AndresPastrana/LiveCode",
    liveDemo: "https://livecode-acfq.onrender.com",
  },
];
