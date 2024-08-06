import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModuleRegistry } from "@ag-grid-community/core";
import { LicenseManager } from "@ag-grid-enterprise/core";
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import App from './App.tsx'

import './index.css'
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

LicenseManager.setLicenseKey(process.env.REACT_AG_GRID_KEY!);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
