import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export type QuestionType = 'text' | 'choice' | 'contact_form' | 'info';

export type QuestionResponse = string | string[] | Record<string, string>;

export interface ChoiceOption {
  id: string;
  label: string;
  subLabel?: string;
  value: string;
  icon?: {
    type: 'lucide' | 'image' | 'react-icon' | 'emoji';
    // For Lucide icons, this is the icon component
    // For images, this can be either a string path or StaticImageData
    // For React Icons, this is the icon component
    // For emoji, this is the emoji character
    name: string | StaticImageData | LucideIcon | IconType;
    // Optional color for icons
    color?: string;
  };
}

export interface Field {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export interface FunnelQuestion {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  placeholder?: string;
  helpText?: string;
  options?: ChoiceOption[];
  fields?: {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
  }[];
  isOptional?: boolean;
  nextStep?: string | ((response: QuestionResponse) => string);
  navigation?: {
    showContinue?: boolean;
    autoProgress?: boolean;
    showSkip?: boolean;
  };
}

export interface BusinessType {
  id: string;
  name: string;
  path: string;
  questions: FunnelQuestion[];
}

export interface UserResponse {
  [key: string]: QuestionResponse;
}

// This defines the structure of the funnel context
export interface FunnelContextType {
  responses: UserResponse;
  currentStep: number;
  businessType: string;
  orderId: string;
  updateResponse: (questionId: string, value: QuestionResponse) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  setBusinessType: (type: string) => void;
  resetFunnel: () => void;
} 