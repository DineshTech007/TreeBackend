export interface PersonData {
  mr: string; // Marathi
  en: string; // English
}

// Backward compatible - supports both string and multilingual data
export interface Person {
  id: string;
  name: string | PersonData;
  x: number;
  y: number;
  parents?: string[];
  children?: string[];
  dateOfBirth?: string | PersonData;
  dateOfDeath?: string | PersonData;
  mobileNumber?: string | PersonData;
  address?: string | PersonData;
  image?: string;
}

// For API responses - flattened structure based on language
export interface PersonResponse {
  id: string;
  name: string;
  x: number;
  y: number;
  parents?: string[];
  children?: string[];
  dateOfBirth?: string;
  dateOfDeath?: string;
  mobileNumber?: string;
  address?: string;
  image?: string;
}

export interface FamilyTreeResponse {
  success: boolean;
  data: Person[];
  message?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
