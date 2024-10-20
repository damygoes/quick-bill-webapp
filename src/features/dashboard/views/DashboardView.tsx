import Container from '@components/layout/Container';
import List from '@components/list/List';
import Typography from '@components/Typography';
import { useUserStore } from '@features/user/userStore';
import { useSearch } from '@shared/context/SearchContext';

interface Customer {
  id: number;
  name: string;
  age: number;
  email: string;
}

// 50 items
const sampleData: Customer[] = [
  { id: 1, name: 'Alice Johnson', age: 30, email: 'alice.johnson@example.com' },
  { id: 2, name: 'Bob Smith', age: 24, email: 'bob.smith@example.com' },
  { id: 3, name: 'Charlie Brown', age: 29, email: 'charlie.brown@example.com' },
  { id: 4, name: 'David Wilson', age: 35, email: 'david.wilson@example.com' },
  { id: 5, name: 'Eva Green', age: 22, email: 'eva.green@example.com' },
  { id: 6, name: 'Frank Wright', age: 40, email: 'frank.wright@example.com' },
  { id: 7, name: 'Grace Lee', age: 31, email: 'grace.lee@example.com' },
  { id: 8, name: 'Henry Thomas', age: 28, email: 'henry.thomas@example.com' },
  {
    id: 9,
    name: 'Isabella Martinez',
    age: 26,
    email: 'isabella.martinez@example.com',
  },
  { id: 10, name: 'Jack Wilson', age: 37, email: 'jack.wilson@example.com' },
  {
    id: 11,
    name: 'Katherine Moore',
    age: 33,
    email: 'katherine.moore@example.com',
  },
  { id: 12, name: 'Liam Taylor', age: 27, email: 'liam.taylor@example.com' },
  { id: 13, name: 'Mia Davis', age: 36, email: 'mia.davis@example.com' },
  {
    id: 14,
    name: 'Noah Rodriguez',
    age: 21,
    email: 'noah.rodriguez@example.com',
  },
  {
    id: 15,
    name: 'Olivia Harris',
    age: 25,
    email: 'olivia.harris@example.com',
  },
  { id: 16, name: 'Paul Walker', age: 32, email: 'paul.walker@example.com' },
  { id: 17, name: 'Quinn Lewis', age: 23, email: 'quinn.lewis@example.com' },
  { id: 18, name: 'Ryan Young', age: 34, email: 'ryan.young@example.com' },
  { id: 19, name: 'Sophia Hall', age: 29, email: 'sophia.hall@example.com' },
  { id: 20, name: 'Thomas Allen', age: 38, email: 'thomas.allen@example.com' },
  { id: 21, name: 'Ursula King', age: 30, email: 'ursula.king@example.com' },
  { id: 22, name: 'Victor Scott', age: 26, email: 'victor.scott@example.com' },
  { id: 23, name: 'Wendy Green', age: 22, email: 'wendy.green@example.com' },
  { id: 24, name: 'Xander Clark', age: 31, email: 'xander.clark@example.com' },
  { id: 25, name: 'Yara Adams', age: 28, email: 'yara.adams@example.com' },
  {
    id: 26,
    name: 'Zachary Evans',
    age: 35,
    email: 'zachary.evans@example.com',
  },
  { id: 27, name: 'Ava White', age: 27, email: 'ava.white@example.com' },
  { id: 28, name: 'Ben Harris', age: 39, email: 'ben.harris@example.com' },
  {
    id: 29,
    name: 'Cecilia Young',
    age: 24,
    email: 'cecilia.young@example.com',
  },
  { id: 30, name: 'Daniel Smith', age: 41, email: 'daniel.smith@example.com' },
  { id: 31, name: 'Ella Lewis', age: 30, email: 'ella.lewis@example.com' },
  { id: 32, name: 'Felix King', age: 23, email: 'felix.king@example.com' },
  {
    id: 33,
    name: 'Gianna Garcia',
    age: 34,
    email: 'gianna.garcia@example.com',
  },
  { id: 34, name: 'Henry Lee', age: 26, email: 'henry.lee@example.com' },
  {
    id: 35,
    name: 'Isla Robinson',
    age: 29,
    email: 'isla.robinson@example.com',
  },
  { id: 36, name: 'Jason Walker', age: 37, email: 'jason.walker@example.com' },
  {
    id: 37,
    name: 'Kylie Martinez',
    age: 32,
    email: 'kylie.martinez@example.com',
  },
  {
    id: 38,
    name: 'Leonard Wright',
    age: 35,
    email: 'leonard.wright@example.com',
  },
  {
    id: 39,
    name: 'Maya Robinson',
    age: 21,
    email: 'maya.robinson@example.com',
  },
  { id: 40, name: 'Nathan Evans', age: 30, email: 'nathan.evans@example.com' },
  { id: 41, name: 'Olive Turner', age: 29, email: 'olive.turner@example.com' },
  { id: 42, name: 'Piper Hall', age: 26, email: 'piper.hall@example.com' },
  { id: 43, name: 'Quincy Moore', age: 34, email: 'quincy.moore@example.com' },
  { id: 44, name: 'Riley Perez', age: 22, email: 'riley.perez@example.com' },
  {
    id: 45,
    name: 'Sofia Ramirez',
    age: 33,
    email: 'sofia.ramirez@example.com',
  },
  { id: 46, name: 'Tyler Long', age: 31, email: 'tyler.long@example.com' },
  { id: 47, name: 'Uma Allen', age: 36, email: 'uma.allen@example.com' },
  { id: 48, name: 'Vincent King', age: 24, email: 'vincent.king@example.com' },
  { id: 49, name: 'Willa Scott', age: 39, email: 'willa.scott@example.com' },
  { id: 50, name: 'Xena Taylor', age: 28, email: 'xena.taylor@example.com' },
];

const CustomerItem = ({ customer }: { customer: Customer }) => (
  <div className="flex items-center justify-start gap-4 p-4 rounded-md bg-card">
    <Typography variant="h4" weight="semibold" className="min-w-72">
      {customer.name}
    </Typography>
    <Typography variant="h5" size="sm" className="min-w-96">
      {customer.email}
    </Typography>
    <Typography variant="h5" size="sm">
      {customer.age}
    </Typography>
  </div>
);

const DashboardView = () => {
  const { user } = useUserStore.getState();
  const { searchQuery } = useSearch();

  return (
    <Container>
      <Typography variant="h5">Welcome, {user?.firstName}!</Typography>
      <List<Customer>
        data={sampleData}
        renderItem={(c) => <CustomerItem customer={c} />}
        scrollContainerHeight="h-[80%]"
        filterFn={(item) => item.age > 25}
        sortFn={(a, b) => a.name.localeCompare(b.name)}
        searchQuery={searchQuery}
        searchFields={['name', 'email', 'age']}
        itemsPerPage={10}
      />
    </Container>
  );
};

export default DashboardView;
