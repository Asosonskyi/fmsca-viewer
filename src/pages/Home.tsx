import { Box, Button, FormControl, Paper } from "@mui/material";
import { FmscaViewer } from "../components/FmscaViewer";
import { useCallback, useState } from "react";
import { TFMSCAItem } from "../types/gridItem";
import { read, utils } from "xlsx";

export const Home = () => {
  const [data, setData] = useState<TFMSCAItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const readUploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (e.target.files) {
        setIsLoading(true);
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e?.target?.result;
          const workbook = read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = utils.sheet_to_json(worksheet) as TFMSCAItem[];
          setData(json);

          setIsLoading(false);
        };

        reader.readAsArrayBuffer(e.target.files[0]);
      }
    },
    []
  );

  return (
    <Box paddingX="10px">
      <form>
        <FormControl sx={{ paddingY: "10px" }}>
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={readUploadFile}
            />

            <Button color="primary" variant="contained" component="span">
              Load FMSCA xml file
            </Button>
          </label>
        </FormControl>
      </form>

      <Paper elevation={1} >
        <FmscaViewer rows={data} loading={isLoading} />
      </Paper>
    </Box>
  );
};
