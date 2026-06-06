'use server';
/**
 * @fileOverview Provides a Genkit flow for generating personalized solar system recommendations and estimated subsidy breakdowns.
 *
 * - aiEnergyAdvisorRecommendation - A function that handles the AI energy advisor recommendation process.
 * - AIEnergyAdvisorInput - The input type for the aiEnergyAdvisorRecommendation function.
 * - AIEnergyAdvisorOutput - The return type for the aiEnergyAdvisorRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIEnergyAdvisorInputSchema = z.object({
  monthlyElectricityConsumptionKwh: z
    .number()
    .min(0)
    .describe('The homeowner\'s average monthly electricity consumption in kilowatt-hours (kWh).'),
  roofAreaSquareMeters: z
    .number()
    .min(0)
    .describe('The usable roof area available for solar panel installation in square meters.'),
});
export type AIEnergyAdvisorInput = z.infer<typeof AIEnergyAdvisorInputSchema>;

const AIEnergyAdvisorOutputSchema = z.object({
  recommendedSystemSizeKw: z
    .number()
    .describe('The recommended optimal solar system size in kilowatts (kW).'),
  estimatedSubsidyAmountRupees: z
    .number()
    .describe(
      'The estimated total subsidy amount in Indian Rupees (INR) the homeowner might be eligible for. This is an estimate based on general government solar subsidy schemes.'
    ),
  subsidyDetails: z
    .string()
    .describe(
      'A detailed breakdown and explanation of how the estimated subsidy amount is calculated, mentioning relevant schemes or factors. Emphasize this is an estimate and subject to policy changes and verification.'
    ),
  recommendationSummary: z
    .string()
    .describe(
      'A comprehensive summary of the solar system recommendation, including benefits, potential savings, and next steps for the homeowner.'
    ),
});
export type AIEnergyAdvisorOutput = z.infer<typeof AIEnergyAdvisorOutputSchema>;

const aiEnergyAdvisorPrompt = ai.definePrompt({
  name: 'aiEnergyAdvisorPrompt',
  input: { schema: AIEnergyAdvisorInputSchema },
  output: { schema: AIEnergyAdvisorOutputSchema },
  prompt: `You are an expert solar energy advisor for Arkā Solar. Your goal is to provide personalized solar system recommendations and an estimated subsidy breakdown for homeowners based on their electricity consumption and available roof area.

Consider the following homeowner data:
- Monthly Electricity Consumption: {{{monthlyElectricityConsumptionKwh}}} kWh
- Usable Roof Area: {{{roofAreaSquareMeters}}} square meters

Based on this information, provide the following:
1.  **Recommended Solar System Size (kW):** Calculate an optimal solar system size in kilowatts (kW) that balances the homeowner's consumption with the available roof area. Assume a typical solar panel efficiency and space requirement for installation. Provide a realistic number, typically between 1kW and 10kW for residential.
2.  **Estimated Subsidy Amount (Rupees):** Provide an estimated total subsidy amount in Indian Rupees (INR) that the homeowner might be eligible for. This should be a plausible estimate based on general government solar subsidy schemes in India, acknowledging that actual eligibility and amounts can vary. For example, mention schemes like the Pradhan Mantri Suryodaya Yojana or other central/state subsidies that provide a fixed amount per kW or a percentage of the system cost up to a cap.
3.  **Subsidy Details Breakdown:** Explain the estimated subsidy amount in detail. Describe how it's calculated, what factors influence it, and mention typical government schemes (e.g., Central Financial Assistance (CFA) for residential rooftop solar, state-specific incentives). Emphasize that this is an estimate and subject to policy changes, state-specific rules, and verification.
4.  **Comprehensive Recommendation Summary:** Provide a friendly and informative summary of the recommendation. Include potential benefits for the homeowner (e.g., environmental impact, long-term savings, energy independence) and suggest next steps (e.g., a detailed site assessment, consultation with Arkā Solar experts). Focus on how the recommended system size addresses their consumption and roof area.

Ensure your output strictly adheres to the provided JSON schema.`,
});

const aiEnergyAdvisorRecommendationFlow = ai.defineFlow(
  {
    name: 'aiEnergyAdvisorRecommendationFlow',
    inputSchema: AIEnergyAdvisorInputSchema,
    outputSchema: AIEnergyAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await aiEnergyAdvisorPrompt(input);
    return output!;
  }
);

export async function aiEnergyAdvisorRecommendation(
  input: AIEnergyAdvisorInput
): Promise<AIEnergyAdvisorOutput> {
  return aiEnergyAdvisorRecommendationFlow(input);
}
