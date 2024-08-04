import { TablePaginationProps } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import {
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useMemo } from "react";

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const isButtonsVisible = useMemo(() => pageCount <= 1, [pageCount]);

  return (
    <MuiPagination
      color="primary"
      className={className}
      hidden={isButtonsVisible}
      hideNextButton={isButtonsVisible}
      hidePrevButton={isButtonsVisible}
      count={pageCount}
      page={page + 1}
      sx={{
        "& .Mui-selected": {
          backgroundColor: "#1976d2",
          color: "#fff",
        },
        "& .Mui-selected:hover": {
          backgroundColor: "#1976d2",
          color: "#fff",
        },
      }}
      onChange={(event, newPage) => {
        onPageChange(event as React.MouseEvent<HTMLButtonElement>, newPage - 1);
      }}
    />
  );
}

export function CustomPagination() {
  return <GridPagination ActionsComponent={Pagination} />;
}
