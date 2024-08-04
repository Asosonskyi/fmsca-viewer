import styled from "@emotion/styled";
import { GridFilterPanel } from "@mui/x-data-grid";

export const StyledFilterPanel = styled(GridFilterPanel)(() => ({
  "& .MuiFormControl-root.MuiDataGrid-filterFormDeleteIcon": {
    display: "none !important",
  },
  "& .MuiDataGrid-filterForm": {
    justifyContent: "flex-end",
  },

  "& .MuiFormControl-root.MuiDataGrid-filterFormOperatorInput": {
    display: "none !important",
  },
}));
