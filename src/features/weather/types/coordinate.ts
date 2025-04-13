export type TCoordinateResponse = {
  name: string; // Name of the found location
  local_names: Record<string, string>[]; // Name of the found location in different languages
  lat: number; // Geographical coordinates of the found location (latitude)
  lon: number; // Geographical coordinates of the found location (longitude)
  country: string; // Country of the found location
  state?: string; // State of the found location
};

export type TSearchItem = TCoordinateResponse & { id: string };
