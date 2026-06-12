
import { LocationLanding } from "@/components/sections/LocationLanding";
import { Metadata } from "next";

const city = "Balod";

export const metadata: Metadata = {
  title: `Best Solar Company in ${city}, Chhattisgarh | SKY RENEWABLE`,
  description: `SKY RENEWABLE offers rooftop solar installation, solar EPC, maintenance, panel cleaning, net metering, and subsidy support in ${city}, Chhattisgarh.`,
  keywords: [`solar company in ${city}`, `rooftop solar in ${city}`, `solar panel installation in ${city}`, `PM Surya Ghar Yojana in ${city}`, `solar EPC in ${city}`, `solar maintenance in ${city}`],
};

export default function BalodLanding() {
  return <LocationLanding city={city} nearbyAreas={["Durg", "Rajnandgaon", "Kanker"]} />;
}
