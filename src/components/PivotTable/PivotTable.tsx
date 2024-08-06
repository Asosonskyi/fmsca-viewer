import React, {
    useMemo,
    useState,
    } from "react";
    import { AgGridReact } from "@ag-grid-community/react";
    import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
    import {
        ColDef,
        ModuleRegistry,
    } from "@ag-grid-community/core";
    import { TFMSCAItem } from '../../types/gridItem';
    
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-quartz.css";
    
      ModuleRegistry.registerModules([
        ClientSideRowModelModule,
      ]);
      
      type Props = {
        rows: Array<TFMSCAItem>;
      }
    
      export const PivotTable: React.FC<Props> = ({ rows }) => {
        const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
        const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
        const [columnDefs, _] = useState<ColDef[]>([
          { field: "created_dt", pivot: true },
          { field: "data_source_modified_dt", pivot: true },
          { field: "entity_type", pivot: true },
          { field: "operating_status", pivot: true },
          { field: "legal_name", pivot: true },
          { field: "dba_name", pivot: true },
          { field: "physical_address", pivot: true },
          { field: "phone", pivot: true },
          { field: "usdot_number", pivot: true },
          { field: "mc_mx_ff_number", pivot: true },
          { field: "out_of_service_date", pivot: true },
        ]);
        const defaultColDef = useMemo<ColDef>(() => {
          return {
            flex: 1,
            minWidth: 150,
          };
        }, []);
        const autoGroupColumnDef = useMemo<ColDef>(() => {
          return {
            minWidth: 250,
          };
        }, []);
    
        if (rows.length === 0) return;
    
        return (
          <div style={containerStyle}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div
                style={gridStyle}
                className={
                  "ag-theme-quartz-dark"
                }
              >
                <AgGridReact<TFMSCAItem>
                  rowData={rows}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  autoGroupColumnDef={autoGroupColumnDef}
                  pivotMode={true}
                />
              </div>
            </div>
          </div>
        );
      };