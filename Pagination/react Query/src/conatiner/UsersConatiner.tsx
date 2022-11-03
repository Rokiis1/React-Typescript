import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../component/Pagination";
import UserCard from "../component/PostCard";
import { User } from "../interfaces/User";
import { getUsersPage } from "../middleware/library/posts";

const UsersConatiner = () => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    isError,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(["users", page], () => getUsersPage(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading Users...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      {isFetching && <span>Loading...</span>}
      {users &&
        users?.data.map((user: User) => <UserCard {...user} key={user.id} />)}
      <Pagination
        isPreviousData={isPreviousData}
        page={page}
        setPage={setPage}
        users={users}
      />
    </div>
  );
};

export default UsersConatiner;
