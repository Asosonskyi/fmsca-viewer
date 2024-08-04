import { CustomPagination } from "./Pagination/CustomPagination";
import { TFMSCAItem } from "../../types/gridItem";
import { Box } from "@mui/material";
import { StyledDataGrid } from "./DataGrid/StyledDataGrid";
import { columns } from "../../constants/grid-columns";
import { CustomToolbar } from "./Toolbar";

type Props = {
  rows: TFMSCAItem[];
  loading: boolean;
};

export const FmscaViewer = ({ rows, loading }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        density="compact"
        loading={loading}
        autoHeight
        disableColumnSorting
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        hideFooter={!rows.length}
        slots={{
          pagination: CustomPagination,
          toolbar: CustomToolbar,
        }}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
      />
    </Box>
  );
};
