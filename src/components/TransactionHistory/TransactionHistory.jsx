import {
  Transaction,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Transaction>
  );
};
