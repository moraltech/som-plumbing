
export enum ServiceType {
  ELECTRICAL = 'Electrical',
  PLUMBING = 'Pulibing',
  HVAC = 'HVAC',
  EMERGENCY = 'Emergency'
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  description: string;
  urgency: 'Standard' | 'Urgent' | 'Emergency';
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface Technician {
  id: string;
  name: string;
  role: string;
  expertise: ServiceType[];
  certifications: string[];
  bio: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}
