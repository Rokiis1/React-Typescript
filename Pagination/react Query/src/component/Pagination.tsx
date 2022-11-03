import { User } from "../interfaces/User";
import PageButton from "./PageButton";

type Props = {
  isPreviousData: boolean;
  page: number;
  setPage(page: number): void;
  users: User;
};

const Pagination = ({ isPreviousData, page, setPage, users }: Props) => {
  const lastPage = () => setPage(users.total_pages);

  const firstPage = () => setPage(1);

  const pagesArray = Array(users.total_pages)
    .fill(1)
    .map((_, index) => index + 1);
  return (
    <nav>
      <button onClick={firstPage} disabled={isPreviousData || page === 1}>
        &lt;&lt;
      </button>
      {pagesArray.map((pg) => (
        <PageButton key={pg} pg={pg} setPage={setPage} />
      ))}
      <button
        onClick={lastPage}
        disabled={isPreviousData || page === users.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  );
};

export default Pagination;
