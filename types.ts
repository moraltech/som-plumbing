
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