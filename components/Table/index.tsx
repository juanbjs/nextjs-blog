import Link from "next/link";
import Pagination from "./Pagination";
import { fullDateFormat } from "@/util/dateFormat";
import EyeButton from "../Button/EyeButton";
import TrashButton from "../Button/TrashButton";

interface TableProps {
  configuration: any;
  data: any;
  page?: number;
}

function getFieldValue(row, field) {
  const auxfield = field;
  return row[auxfield];
}

const getFieldType = (type, value) => {
  switch (type) {
    case "url":
      return (
        <Link
          className="text-sm"
          target="_blank"
          href={encodeURI(String(value))}
        >
          {value}
        </Link>
      );
    case "fullDate":
      return (
        <p className="text-sm">{fullDateFormat(value)}</p>
      );
    default:
      return <p className="text-sm">{value}</p>;
  }
};

const Table = ({ configuration, data, page } : TableProps) => {
  const fields = configuration.fields;
  const rowsPerPage = 10;
  const startPage = Number(page);
  const currentPage = (startPage - 1) * rowsPerPage;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {fields
                .filter((item) => item.showOnTable)
                .map((item, key) => (
                  <th
                    key={item.id + "-" + key}
                    className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
                  >
                    {item.label}
                  </th>
                ))}
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(currentPage, currentPage + rowsPerPage)
              .map((row, rowKey) => (
                <tr key={row._id + "-" + rowKey}>
                  {fields
                    .filter((item) => item.showOnTable)
                    .map((column, columnKey) => (
                      <td
                        key={column.id + "-" + columnKey}
                        className="border-b border-[#eee] px-4 dark:border-strokedark xl:pl-11"
                      >
                        {getFieldType(
                          column.type,
                          getFieldValue(row, column.id),
                        )}{" "}
                      </td>
                    ))}
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center justify-center space-x-3.5">
                      <Link
                        href={`/admin/posts/${row._id}`}
                      >
                        <EyeButton />
                      </Link>
                      <TrashButton />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          count={data.length}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          page={page}
        />
      </div>
    </div>
  );
};

export default Table;
