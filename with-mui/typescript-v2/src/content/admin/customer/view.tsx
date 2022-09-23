import { FixedHeaderTable } from "src/components";

export const ViewCustomer = () => {
  const customers = [
    { name: "Customers 1", email: "customers1@mail.com" },
    { name: "Customers 2", email: "customers2@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
    { name: "Customers 3", email: "customers3@mail.com" },
  ];

  return (
    <FixedHeaderTable
      data={customers}
      columns={[
        { Header: "Name", accessor: "name" },
        { Header: "Email", accessor: "email" },
      ]}
      title="Customers"
    />
  );
};
