import { GridColDef } from "@mui/x-data-grid";
import { format, parseISO } from "date-fns";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "",
    width: 80,
    editable: false,
    filterable: false,
  },
  {
    field: "created_dt",
    headerName: "Created",
    width: 110,
    editable: false,
    valueGetter: (value) => format(parseISO(value), "MM.dd.yyyy"),
  },
  {
    field: "data_source_modified_dt",
    headerName: "Modified",
    width: 110,
    editable: false,
    valueGetter: (value) => format(parseISO(value), "MM.dd.yyyy"),
  },
  {
    field: "entity_type",
    headerName: "Entity type",
    width: 90,
    editable: false,
  },
  {
    field: "operating_status",
    headerName: "Operating status",
    width: 200,
    editable: false,
  },
  {
    field: "legal_name",
    headerName: "Legal name",
    width: 150,
    editable: false,
  },
  {
    field: "dba_name",
    headerName: "DBA name",
    width: 190,
    editable: false,
  },
  {
    field: "physical_address",
    headerName: "Address",
    width: 200,
    editable: false,
  },
  { field: "phone", headerName: "Phone", width: 140, editable: false },
  {
    field: "usdot_number",
    headerName: "DOT",
    width: 80,
    editable: false,
    align: "left",
  },
  {
    field: "mc_mx_ff_number",
    headerName: "MC/MX/FF",
    width: 110,
    editable: false,
  },
  {
    field: "out_of_service_date",
    headerName: "Out of service",
    width: 120,
    editable: false,
  },
];