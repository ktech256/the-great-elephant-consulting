import { z } from 'zod';
import { services } from '@/data/services';

const serviceTitles = services.map((service) => service.title);
const subServices = services.flatMap((service) => service.subServices);

export const consultationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  companyName: z.string().optional(),
  phone: z.string().min(8, 'Please provide a valid phone number.'),
  email: z.string().email('Please provide a valid email address.'),
  service: z.string().refine((value) => serviceTitles.includes(value), 'Please select a valid service.'),
  subService: z.string().refine((value) => subServices.includes(value), 'Please select a valid sub-service.'),
  preferredDate: z.string().min(1, 'Please choose a preferred date.'),
  preferredTime: z.string().min(1, 'Please choose a preferred time.'),
  message: z.string().optional()
});

export type ConsultationInput = z.infer<typeof consultationSchema>;