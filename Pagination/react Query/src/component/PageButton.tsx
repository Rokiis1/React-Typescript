type Props = {
  setPage(page: number): void;
  pg: number;
};

const PageButton = ({ pg, setPage }: Props) => {
  return <button onClick={() => setPage(pg)}>{pg}</button>;
};

export default PageButton;
