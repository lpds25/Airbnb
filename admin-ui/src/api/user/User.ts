import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
