// Define the interface for list items that can be either strings or title-description objects
export type ListItem = string | {
  title: string;
  description: string;
};

// Define the interface for steps in the process
export interface Step {
  number: number;
  title: string;
  description: string;
  additionalText?: string;
  list?: string[];
  finalText?: string;
}

// Define the interface for a section in the questions
export interface Section {
  id: string;
  title: string;
  content?: string[];
  list?: ListItem[];
  additionalContent?: string | string[];
  additionalList?: {
    title: string;
    description: string;
  }[];
  steps?: Step[];
}

// Define the interface for the author
export interface Author {
  name: string;
  title: string;
  date: string;
  bio: string;
  image: string;
}

// Define the interface for the questions data
export interface QuestionsData {
  sections: Section[];
  author: Author;
} 