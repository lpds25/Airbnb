import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="listingCreatedBy " source="listingCreatedBy" />
        <TextInput label="locationData " source="locationData" />
        <TextInput label="locationType " source="locationType" />
        <TextInput label="mapData" source="mapData" />
        <TextInput label="photos " source="photos" />
        <TextInput label="placeSpace " source="placeSpace" />
        <TextInput label="placeType " source="placeType" />
        <NumberInput label="price " source="price" />
        <TextInput label="Setup Wishlists" source="setupWishlists" />
        <TextInput label="title " source="title" />
        <ReferenceInput source="user.id" reference="User" label="user ">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
