import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  description?: string | null;
  listingCreatedBy?: string | null;
  locationData?: string | null;
  locationType?: string | null;
  mapData?: string | null;
  photos?: string | null;
  placeSpace?: string | null;
  placeType?: string | null;
  price?: number | null;
  setupWishlists?: string | null;
  title: string;
  user?: UserWhereUniqueInput | null;
};
