import { z } from "zod";

export const createCompSchema = z.object({
  name: z.string().min(1, "Comp name is required"),
  coreCards: z.array(z.string()),
  addonCards: z.array(z.string()),
  heroCards: z.array(z.string()),
  spellCards: z.array(z.string()),
});

export type TCreateComp = z.infer<typeof createCompSchema>;
