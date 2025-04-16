import { Contact } from "./Schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ConcatTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            onClick={() => onClick(c.id)}
            style={{ cursor: "pointer" }}
            key={c.id}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ConcatTable;
