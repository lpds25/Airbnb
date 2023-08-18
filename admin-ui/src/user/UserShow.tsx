import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Listing"
          target="userId"
          label="listings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="listingCreatedBy " source="listingCreatedBy" />
            <TextField label="locationData " source="locationData" />
            <TextField label="locationType " source="locationType" />
            <TextField label="mapData" source="mapData" />
            <TextField label="photos " source="photos" />
            <TextField label="placeSpace " source="placeSpace" />
            <TextField label="placeType " source="placeType" />
            <TextField label="price " source="price" />
            <TextField label="Setup Wishlists" source="setupWishlists" />
            <TextField label="title " source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user " source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
