export interface DaySchedule {
  open: number;
  close: number;
}

export const RESTAURANT_NAME = "My F**king Restaurant";
export const RESTAURANT_PHONE = "+977-1-456-7890";
export const RESTAURANT_EMAIL = "reserve@myfkingrestaurant.com";
export const RESTAURANT_ADDRESS = {
  streetAddress: "Jhamsikhel Road, Lalitpur",
  addressLocality: "Lalitpur",
  addressRegion: "Bagmati",
  postalCode: "44600",
  addressCountry: "NP",
};
export const RESTAURANT_COORDS = { lat: 27.6761, lng: 85.3143 };

export const operatingHours: Record<string, DaySchedule> = {
  0: { open: 8, close: 13 },
  1: { open: 11, close: 22 },
  2: { open: 11, close: 22 },
  3: { open: 11, close: 22 },
  4: { open: 11, close: 22 },
  5: { open: 11, close: 22 },
  6: { open: 8, close: 13 },
};

export function formatHour(hour: number): string {
  if (hour === 0 || hour === 24) return "12 AM";
  if (hour === 12) return "12 PM";
  if (hour > 12) return `${hour - 12} PM`;
  return `${hour} AM`;
}