import { Box } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { StyledFilterPanel } from "../Filter";

export function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledFilterPanel />
      </Box>
    </GridToolbarContainer>
  );
}
