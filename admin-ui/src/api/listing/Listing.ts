import { User } from "../user/User";

export type Listing = {
  createdAt: Date;
  description: string | null;
  id: string;
  listingCreatedBy: string | null;
  locationData: string | null;
  locationType: string | null;
  mapData: string | null;
  photos: string | null;
  placeSpace: string | null;
  placeType: string | null;
  price: number | null;
  setupWishlists: string | null;
  title: string;
  updatedAt: Date;
  user?: User | null;
};
