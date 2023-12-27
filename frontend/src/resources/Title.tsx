import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const TitleTitle = () => {
  const record = useRecordContext();
  return <span>Title {record ? `"${ record.Id }"` : ""}</span>;
};

export const TitleList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const TitleEdit = () => (
                    <Edit title={<TitleTitle />}>
                      <SimpleForm>
                          <NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const TitleCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,

    ];


