import { Table } from '@fatcn-ui'

const data = [
  {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '1234 Main St, Anytown, USA',
    status: 'active',
  },
  {
    name: 'Jane Doe',
    age: 25,
    email: 'Jane.doe@example.com',
    phone: '1234567890',
    address: '1234 Main St, Anytown, USA',
    status: 'active',
  },
  {
    name: 'Bob Smith',
    age: 32,
    email: 'bob.smith@example.com',
    phone: '9876543210',
    address: '5678 Oak Ave, Somewhere, USA',
    status: 'inactive',
  },
  {
    name: 'Alice Johnson',
    age: 28,
    email: 'alice.j@example.com', 
    phone: '4567891230',
    address: '910 Pine Rd, Elsewhere, USA',
    status: 'active',
  }
]

const TableExample = () => {
  return (
    <Table data={data} itemsPerPage={3}/>
  )
}

export default TableExample