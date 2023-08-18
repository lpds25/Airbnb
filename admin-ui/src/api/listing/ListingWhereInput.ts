import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: StringNullableFilter;
  locationType?: StringNullableFilter;
  mapData?: StringNullableFilter;
  photos?: StringNullableFilter;
  placeSpace?: StringNullableFilter;
  placeType?: StringNullableFilter;
  price?: FloatNullableFilter;
  setupWishlists?: StringNullableFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
};
