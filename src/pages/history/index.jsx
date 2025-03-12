import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useToaster } from "src/context/TosterContext";
import { paginationConfig } from "src/consts/common";
import { formattedDateAndTime } from "src/utils/helperMethods";
import { dataGridCommonProps } from "src/utils/commonStyles";
import useHistoryStore from "src/store/useHistoryStore";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, capitalize, TextField } from "@mui/material";
import { communicationTypeOptions } from "src/consts/dropdown";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const History = () => {
  //===========================================
  // Component States and Dependencies
  //===========================================
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [queryParams, setQueryParams] = useState({});
  const [paginationModel, setPaginationModel] = useState({
    pageSize: paginationConfig.DEFAULT_PAGE_SIZE,
    page: 0,
  });
  const { historyList, fetchHistory } = useHistoryStore();
  const { showToast } = useToaster();

  //===========================================
  // Fetch Initial Data: [List of Grievances]
  //===========================================
  useEffect(() => {
    fetchHistory(
      {
        currentPage: paginationModel.page + 1,
        perPage: paginationModel.pageSize,
      },
      queryParams,
      showToast
    );
  }, [queryParams]);

  //==========================================
  // Table Definition
  //==========================================
  const columns = [
    {
      field: "id",
      headerName: "Grievance Number",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.grievance_id}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 180,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div>
            {params?.row?.createdAt
              ? formattedDateAndTime(params?.row?.createdAt)
              : "-"}
          </div>
        );
      },
    },
    {
      field: "updated_by",
      headerName: "Updated By",
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.updated_by}</div>;
      },
    },
    {
      field: "remarks",
      headerName: "Remarks",
      width: 300,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.remarks}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div className={`chip ${params?.row?.status?.type}`}>
            {params?.row?.status?.type
              ? capitalize(params?.row?.status?.type)
              : ""}
          </div>
        );
      },
    },
  ];

  //==========================================
  // Handle Data Filteration
  //==========================================
  const handleFilteration = () => {
    const updatedQueryParams = {
      search: searchText,
    };
    setQueryParams(updatedQueryParams);
  };

  return (
    // <div style={{ margin: '50px' }}>
    //     <div style={{ border: '1px solid gray', borderRadius: '5px', height: '80px', textAlign: 'center', alignContent: 'center', marginBottom: '20px' }}> History Stats</div>
    //     <div>
    //         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "5px" }}>
    //             <h6>Grievance History</h6>
    //             {/* <Link to={`/grievance/add`} style={{ borderRadius: "4px", padding: "4px 8px", background: '#4299e1', color: 'whitesmoke', cursor: 'pointer', textDecoration: 'none' }}>+ New Grievance</Link> */}
    //         </div>
    //         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "5px", width: '350px', gap: "10px" }}>
    //             <input
    //                 value={searchText}
    //                 onChange={(e) => setSearchText(e.target.value)}
    //                 style={{
    //                     padding: '8px',
    //                     border: '1px solid #ccc',
    //                     borderRadius: '5px',
    //                     fontSize: '14px',
    //                     outline: 'none',
    //                     width: '100%',
    //                 }}
    //             />
    //             <button onClick={handleFilteration} style={{ borderRadius: "4px", padding: "4px 8px", background: '#4299e1', color: 'whitesmoke', cursor: 'pointer', textDecoration: 'none' }}>
    //                 <SearchIcon />
    //             </button>
    //         </div>
    //         <div style={{ height: '500px', width: '75vw' }}>
    //             <DataGrid
    //                 {...dataGridCommonProps}
    //                 rows={historyList?.rows}
    //                 columns={columns}
    //                 paginationModel={paginationModel}
    //                 loading={historyList.loading}
    //                 rowCount={historyList.total}
    //                 pageSizeOptions={paginationConfig.DEFAULT_PAGE_SIZE_OPTIONS}
    //                 onPaginationModelChange={(pageInfo) => {
    //                     fetchHistory({
    //                         currentPage: pageInfo.page + 1,
    //                         perPage: pageInfo.pageSize,
    //                     }, queryParams, showToast);
    //                     setPaginationModel(pageInfo);
    //                 }}
    //             />
    //         </div>
    //     </div>
    // </div>
    <>
      {/* Grievnace Stats */}
      <div className="dashboard-card-row">
        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3 className="dashboard-card-number">50K</h3>
            <p>Company</p>
            <a href="#" className="dashboard-card-link"></a>
          </div>
        </div>

        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3 className="dashboard-card-number">10K</h3>
            <p>Broker</p>
            <a href="#" className="dashboard-card-link"></a>
          </div>
        </div>

        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3 className="dashboard-card-number">50K</h3>
            <p>Hospital</p>
            <a href="#" className="dashboard-card-link"></a>
          </div>
        </div>

        <div className="dashboard-col">
          <div className="dashboard-card">
            <h3 className="dashboard-card-number">5K</h3>
            <p>IRDA</p>
            <a href="#" className="dashboard-card-link"></a>
          </div>
        </div>
      </div>
      <div>
        {/* Search and Filters */}
        {/* <div className="form-field-col-group search-filter no-wrap">
                    <div className="search-filter-fldgroup">
                        <div className="form-field-col">
                            <label className="form-field-label">Search</label>
                            <div className="form-field-wrap">
                                <input
                                    className="field-input"
                                    placeholder='Search Text'
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-field-col">
                            <label className="form-field-label">Received From</label>
                            <div className="form-field-wrap">
                                <Autocomplete
                                    options={communicationTypeOptions || []}
                                    getOptionLabel={(option) => option ? option.name : ''}
                                    isOptionEqualToValue={(option, value) => option.key === value?.key}
                                    value={null}
                                    // onChange={(e, val) => {
                                    //     field.onChange(val);
                                    // }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className=''
                                            variant="outlined"
                                            placeholder="Received From"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="form-field-col">
                            <label className="form-field-label">Severity Type</label>
                            <div className="form-field-wrap">
                                <Autocomplete
                                    options={communicationTypeOptions || []}
                                    getOptionLabel={(option) => option ? option.name : ''}
                                    isOptionEqualToValue={(option, value) => option.key === value?.key}
                                    value={null}
                                    // onChange={(e, val) => {
                                    //     field.onChange(val);
                                    // }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className=''
                                            variant="outlined"
                                            placeholder="Severity Type"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="form-field-col">
                            <label className="form-field-label">Status</label>
                            <div className="form-field-wrap">
                                <Autocomplete
                                    options={communicationTypeOptions || []}
                                    getOptionLabel={(option) => option ? option.name : ''}
                                    isOptionEqualToValue={(option, value) => option.key === value?.key}
                                    value={null}
                                    // onChange={(e, val) => {
                                    //     field.onChange(val);
                                    // }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className=''
                                            variant="outlined"
                                            placeholder="Status"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="form-field-col">
                            <label className="form-field-label">Start Date</label>
                            <div className="form-field-wrap">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        maxDate={endDate}
                                        format='DD/MM/YYYY'
                                        value={startDate}
                                        onChange={(value) => { setStartDate(value) }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="form-field-col">
                            <label className="form-field-label">End Date</label>
                            <div className="form-field-wrap">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        minDate={startDate}
                                        format='DD/MM/YYYY'
                                        value={endDate}
                                        onChange={(value) => { setEndDate(value) }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    <div className="form-field-col button-col">
                        <button onClick={handleFilteration} className="admin-icon-button">
                            <SearchIcon />
                        </button>
                    </div>
                </div> */}
        {/* Listing */}
        <div className="admin-data-table">
          <DataGrid
            {...dataGridCommonProps}
            rows={historyList.rows}
            columns={columns}
            paginationModel={paginationModel}
            loading={historyList.loading}
            rowCount={historyList.total}
            pageSizeOptions={paginationConfig.DEFAULT_PAGE_SIZE_OPTIONS}
            onPaginationModelChange={(pageInfo) => {
              fetchHistory(
                {
                  currentPage: pageInfo.page + 1,
                  perPage: pageInfo.pageSize,
                },
                queryParams,
                showToast
              );
              setPaginationModel(pageInfo);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default History;
