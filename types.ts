export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyPoints: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  offerings: Array<{
    title: string;
    description: string;
  }>;
  strengths: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
}