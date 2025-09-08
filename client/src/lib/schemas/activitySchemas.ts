import {z} from 'zod'; 
import { requiredString } from '../util/util';

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
