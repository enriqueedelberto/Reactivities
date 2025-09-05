import {z} from 'zod';

const requiredString = (fieldName: string) => z
    .string({ required_error: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` });

export const activitySchema = z.object({
  id: z.string().uuid(),
  title: requiredString('Title'),
  description: requiredString('Description').min(10).max(500),
  category: requiredString('Category').min(2).max(100),
  date:   z.coerce.date( {
    message: "Invalid date",
  }),
  city: requiredString('City'),
  venue: requiredString('Venue'),
});

export type ActivitySchema = z.infer<typeof activitySchema>;
