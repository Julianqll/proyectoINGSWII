import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; role: string }[];
}

const rolesData = ['Manager', 'Collaborator', 'Contractor'];

export function UsersRolesTable({ data }: UsersTableProps) {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="xs">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>


      <td>6 days ago</td>
      <td>
          <Badge fullWidth>Active</Badge>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={700} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Last active</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}