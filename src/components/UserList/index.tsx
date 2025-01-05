import { useEffect, useState } from "react";
import { userService } from "../../services/Api";
import { Container, FilterContainer, HeaderItem, Input, ListHeader, PageButton, PaginationContainer, UserData, UserItem, UserList } from "./styles";

type User = {
  id: string;
  name: string;
  email: string;
}

type ApiError = {
  message: string;
  status?: number;
}

type Filters = {
  name: string;
  email: string;
};

export function UsersList(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ name: "", email: "" });

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const filtersParam = JSON.stringify(filters);
        const data = await userService.getUsers(currentPage, 2, filtersParam);
        if (Array.isArray(data.users)) {
          setUsers(data.users);
          setTotalPages(data.totalPages);
        } else {
          throw new Error('Invalid response: Expected an array of users');
        }
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message);
      }
    };

    fetchUsers();
  }, [currentPage, filters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <PaginationContainer>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        {pages.map((page) => (
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        ))}
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </PaginationContainer>
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <Container>
      <FilterContainer>
        <Input
          type="text"
          name="name"
          placeholder="Filter by name"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="Filter by email"
          value={filters.email}
          onChange={handleFilterChange}
        />
      </FilterContainer>
      <UserList>
        <ListHeader>
          <HeaderItem>Name</HeaderItem>
          <HeaderItem>Email</HeaderItem>
        </ListHeader>
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserData>{user.name}</UserData>
            <UserData>{user.email}</UserData>
          </UserItem>
        ))}
      </UserList>
      {renderPagination()}
    </Container>
  );
}