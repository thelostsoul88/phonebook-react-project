import { useGetContactsQuery } from "../../redux/contacts/contactsApi";

import { Filter } from "../Filter/Filter";
import { ContactsList } from "../ContactsList/ContactsList";
import { Loader } from "../Loader/Loader";
import { Title } from "../Title/Title";

export const Contacts = () => {
  const { data: contacts = [], isError, isLoading } = useGetContactsQuery();
  return (
    <>
      {!isError && <Filter />}
      {!contacts.length && !isError && <Title>No contacts</Title>}

      {contacts.length > 0 && !isError && <ContactsList />}

      {isLoading && !isError && <Loader />}
    </>
  );
};
