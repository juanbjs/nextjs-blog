import Link from "next/link";

interface PaginationProps {
  count: number;
  rowsPerPage: number;
  currentPage: number;
  page: number;
}

const round = (v, n) => {
  return Math.ceil(v * Math.pow(10, n)) / Math.pow(10, n);
};

const generatePage = (pages) => {
  let result = [];

  for (let index = 0; index < pages; index++) {
    result.push(index + 1);
  }

  return result;
};

const Pagination = ({
  count,
  rowsPerPage,
  currentPage,
  page,
} : PaginationProps) => {
  const pages = round(count / rowsPerPage, 0);

  return (
    <nav className="mb-4 mt-4">
      <ul className="flex h-8 items-center justify-center -space-x-px text-sm">
        <li>
          <Link
            href={`?page=${Number(page) - 1}`}
            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-[#eee] px-3 dark:border-strokedark dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-2.5 w-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {generatePage(pages).map((item, key) => (
          <li key={"li" + key}>
            <Link
              href={`?page=${item}`}
              className={`text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ms-0 flex h-8 items-center justify-center border border-e-0 border-[#eee] px-3 dark:border-strokedark dark:hover:text-white ${currentPage === item && "font-bold"}`}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`?page=${Number(page) + 1}`}
            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ms-0 flex h-8 items-center justify-center rounded-e-lg border border-e-0 border-[#eee] px-3 dark:border-strokedark dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-2.5 w-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
