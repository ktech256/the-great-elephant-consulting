import { z } from 'zod';
import { services } from '@/data/services';

// Normalize service titles
const serviceTitles = services.map((service) => service.title);

// Normalize subServices (works whether string[] or object[])
const subServiceTitles = services.flatMap((service) =>
  (service.subServices ?? []).map((sub: any) =>
    typeof sub === 'string' ? sub : sub?.title
  )
);

export const consultationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  companyName: z.string().optional(),
  phone: z.string().min(8, 'Please provide a valid phone number.'),
  email: z.string().email('Please provide a valid email address.'),

  service: z
    .string()
    .refine((value) => serviceTitles.includes(value), 'Please select a valid service.'),

  subService: z
    .string()
    .refine((value) => subServiceTitles.includes(value), 'Please select a valid sub-service.'),

  preferredDate: z.string().min(1, 'Please choose a preferred date.'),
  preferredTime: z.string().min(1, 'Please choose a preferred time.'),
  message: z.string().optional()
});

export type ConsultationInput = z.infer<typeof consultationSchema>;