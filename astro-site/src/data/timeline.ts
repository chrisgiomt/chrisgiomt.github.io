export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'Certification' | 'Role' | 'Project' | 'Education';
  techStack?: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    id: "ai-astro-portfolio",
    date: "July 2026",
    title: "Architected Modern Astro Portfolio",
    description: "Designed and built a highly performant, statically generated personal portfolio utilizing Astro 5, MDX, and Tailwind CSS to showcase my journey and technical deep-dives.",
    category: "Project",
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "MDX"]
  },
  {
    id: "aws-solutions-architect",
    date: "March 2026",
    title: "AWS Certified Solutions Architect",
    description: "Achieved the AWS SAA certification, mastering the design of scalable, highly available, and fault-tolerant cloud architectures.",
    category: "Certification",
    techStack: ["AWS", "Cloud Architecture", "Security"]
  },
  {
    id: "ccna",
    date: "September 2025",
    title: "Cisco Certified Network Associate (CCNA)",
    description: "Solidified foundational networking knowledge including routing, switching, IP addressing, and network security fundamentals.",
    category: "Certification",
    techStack: ["Networking", "Cisco", "TCP/IP"]
  },
  {
    id: "cyber-bootcamp",
    date: "June 2024",
    title: "Cybersecurity Bootcamp",
    description: "Completed an intensive cybersecurity training program focusing on threat analysis, penetration testing, and incident response.",
    category: "Education",
    techStack: ["Kali Linux", "Wireshark", "Splunk"]
  },
  {
    id: "security-plus",
    date: "May 2024",
    title: "CompTIA Security+",
    description: "Earned the globally recognized Security+ certification, validating baseline skills to perform core security functions.",
    category: "Certification",
    techStack: ["Risk Management", "Cryptography", "Identity Access"]
  },
  {
    id: "network-plus",
    date: "March 2024",
    title: "CompTIA Network+",
    description: "Secured the Network+ certification to master the fundamentals of configuring, troubleshooting, and managing enterprise networks.",
    category: "Certification",
    techStack: ["OSI Model", "Subnetting", "VLANs"]
  },
  {
    id: "it-support-role",
    date: "November 2023",
    title: "IT Support Specialist",
    description: "Started my first major professional role in IT support, handling tier 1 and tier 2 technical issues for a fast-paced enterprise.",
    category: "Role",
    techStack: ["Active Directory", "O365", "Ticketing"]
  },
  {
    id: "home-lab",
    date: "August 2023",
    title: "Built Enterprise Home Lab",
    description: "Procured a decommissioned Dell PowerEdge server to build a robust Proxmox home lab for deploying and testing virtualized environments.",
    category: "Project",
    techStack: ["Proxmox", "Docker", "Ubuntu Server"]
  },
  {
    id: "graduation",
    date: "May 2023",
    title: "Graduated University",
    description: "Completed my degree with a focus on Information Systems and Computer Science fundamentals.",
    category: "Education",
    techStack: ["Computer Science", "Algorithms", "Databases"]
  },
  {
    id: "first-python",
    date: "February 2023",
    title: "First Python Automation",
    description: "Wrote my very first Python script to completely automate a tedious daily file-sorting task, sparking my love for coding.",
    category: "Project",
    techStack: ["Python", "Scripting", "OS Module"]
  },
  {
    id: "tech-club",
    date: "September 2022",
    title: "Joined University Tech Club",
    description: "Joined the local tech club and started participating in local hackathons and cyber defense competitions.",
    category: "Education",
    techStack: ["Teamwork", "CTFs"]
  },
  {
    id: "html-css",
    date: "July 2022",
    title: "Learned Web Fundamentals",
    description: "Took the plunge into web development by mastering the fundamentals of HTML, CSS, and basic vanilla JavaScript.",
    category: "Education",
    techStack: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "first-pc",
    date: "December 2021",
    title: "Built My First PC",
    description: "Sourced components and built my first custom desktop PC, sparking my lifelong obsession with hardware and operating systems.",
    category: "Project",
    techStack: ["Hardware", "Windows", "Troubleshooting"]
  }
];
