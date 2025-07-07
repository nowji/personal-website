export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  imagePath?: string;
  type: "research" | "work" | "involvement";
}
