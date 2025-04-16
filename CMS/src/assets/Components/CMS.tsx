import { useState } from "react";
import ConcatTable from "./ConcatTable";
import ContacForm from "./ContacForm";
import { Contact } from "./Schemas/Contact";

type Props = {};

function CMS({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([contact, ...contacts]);
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id != id));
  };

  // console.log(contacts);

  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <ContacForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ConcatTable contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default CMS;
