import type { Experience } from "../types/Experience";

const experiences: Experience[] = [
  {
    company: "The Trade Desk",
    position: "Software Engineer Intern",
    startDate: "May 2025",
    description: [
      "Integrating automated accessibillity testing into already existing playwright smoke tests",
      "Adding a scheduled and triggered job into the Gitlab pipeline",
      "Creating a web app with React to act as a dashboard for pipeline artifacts and local results",
    ],
    type: "work",
  },
  {
    company: "UF AI Scholars",
    position: "Researcher",
    startDate: "August 2025",
    description: [
      "Working under Dr. Cameron Buckner to create a new data set for fine tuning LLM's to be more empathetic",
    ],
    type: "research",
  },
  {
    company: "Swamphacks",
    position: "Operations Committee Member",
    startDate: "May 2025",
    description: [
      "Collaborating with student orgs to set up workshops and socials",
    ],
    type: "involvement",
  },
  {
    company: "ACM UF",
    position: "Web Developer",
    startDate: "March 2025",
    endDate: "May 2025",
    description: [
      "Created a custom dashboard to manage member attendance and track meetings using react and firebase",
    ],
    type: "involvement",
  },
  {
    company: "Siemens Energy",
    position: "Salesforce Developer Intern",
    startDate: "August 2024",
    endDate: "March 2025",
    description: [
      "Refactored a customer survey tool for power plant downtimes that routes to regional managers \
      based on net promoter score (NPS) and customer region using Apex, Flows, and Email Templates to reduce resource use",
    ],
    type: "work",
  },
  {
    company: "Siemens Energy",
    position: "IT Intern",
    startDate: "March 2024",
    endDate: "August 2024",
    description: [
      "Developed the SurveySight application to be used by the software procurement team in order to categorize and visualize results",
      "Used Power Apps, PowerBI, and a python script to manage responses and automate dashboard creation to reduce labor costs by 80%",
      " Integrated agile methodology and organized sprints for a team using Jira to distribute tasks and document work",
    ],
    type: "work",
  },

  {
    company: "Data-Driven Humanities Research Group",
    position: "Research Assistant Team Lead",
    startDate: "January 2023",
    endDate: "May 2024",
    description: [
      "Worked on developing a sentiment model to analyze large volumes of ancient Greek and Latin text",
      "On the Latin dataset team with the goal of procedurally creating training sentences with preassigned sentiments using pre-lemmatized words",
      "Led a team of 4 others which involved meeting weekly and regularly communicating with Dr. Bozia (the PI)",
    ],
    type: "research",
  },
];

export default experiences;
