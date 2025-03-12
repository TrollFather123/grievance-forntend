import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useToaster } from "src/context/TosterContext";
import { iconType, paginationConfig } from "src/consts/common";
import { formattedDateAndTime } from "src/utils/helperMethods";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { dataGridCommonProps } from "src/utils/commonStyles";
import { Autocomplete, capitalize, TextField } from "@mui/material";
import { communicationTypeOptions, commonDropdown } from "src/consts/dropdown";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import useGrievancetore from "src/store/useGrievanceStore";
import ConfirmationModal from "src/components/modals/ConfirmationModal";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const GrievanceReview = () => {
  //===========================================
  // Component States and Dependencies
  //==========================================
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [deleteMode, setDeleteMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [queryParams, setQueryParams] = useState({});
  const [paginationModel, setPaginationModel] = useState({
    pageSize: paginationConfig.DEFAULT_PAGE_SIZE,
    page: 0,
  });
  const { loading, grievanceList, fetchGrievances, deleteSpecificGrievance } =
    useGrievancetore();
  const { showToast } = useToaster();
  // console.log("START DATE: ", startDate && startDate.format('DD/MM/YYYY'))
  // console.log("End Date: ", endDate && endDate.format('DD/MM/YYYY'))

  //===========================================
  // Fetch Initial Data: [List of Grievances]
  //===========================================
  useEffect(() => {
    // fetchGrievances({
    //     currentPage: paginationModel.page + 1,
    //     perPage: paginationModel.pageSize
    // }, queryParams, showToast);
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
        return <div>{params?.row?.grievance_no}</div>;
      },
    },
    {
      field: "member_name",
      headerName: "Member Name",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.member_name}</div>;
      },
    },
    {
      field: "severity_type",
      headerName: "Severity",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div className={`chip ${params?.row?.severity_type?.type}`}>
            {params?.row?.severity_type?.name
              ? capitalize(params?.row?.severity_type?.name)
              : ""}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.address}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div className={`chip ${params?.row?.status?.type}`}>
            {params?.row?.status?.name}
          </div>
        );
      },
    },
    {
      field: "received_from",
      headerName: "Received From",
      width: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <div>{params?.row?.grievance_received_type?.name}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Received Date",
      width: 200,
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
      field: "tat_time",
      headerName: "TAT",
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div>
            {params?.row?.tat_time}
          </div>
        );
      },
    },
    // {
    //     field: 'assigned_to',
    //     headerName: 'Assigned To',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.assigned_to}</div>
    //         )
    //     }
    // },

    // {
    //     field: 'communication_type',
    //     headerName: 'Communication Type',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.communication_type?.type ? capitalize(params?.row?.communication_type?.type) : ''}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'grievance_type',
    //     headerName: 'Grievance Type',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.grievance_type_details?.grievance_type}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'grievance_subtype',
    //     headerName: 'Grievance Sub Type',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.grievance_subtype_details?.grievance_subtype}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'policy_no',
    //     headerName: 'Policy Number',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.policy_no}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'member_no',
    //     headerName: 'Member Number',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.member_no}</div>
    //         )
    //     }
    // },

    // {
    //     field: 'phone_no',
    //     headerName: 'Phone Number',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.phone_no}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'email',
    //     headerName: 'Email',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.email}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'remarks',
    //     headerName: 'Remarks',
    //     width: 150,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.remarks ? capitalize(params?.row?.remarks) : ''}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'createdAt',
    //     headerName: 'Created At',
    //     width: 200,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.createdAt ? formattedDateAndTime(params?.row?.createdAt) : '-'}</div>
    //         )
    //     }
    // },
    // {
    //     field: 'sla_deadline',
    //     headerName: 'SLA Deadline',
    //     width: 200,
    //     sortable: false,
    //     filterable: false,
    //     hideable: false,
    //     disableColumnMenu: true,
    //     renderCell: (params) => {
    //         return (
    //             <div>{params?.row?.sla_deadline ? formattedDateAndTime(params?.row?.sla_deadline) : '-'}</div>
    //         )
    //     }
    // },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div className="action_icon_container">
            {/* <Tooltip id='delete' title='Delete'> */}
            {/* <DeleteIcon
                            className='action_icon'
                            title='Delete'
                            onClick={() => {
                                setSelectedGrievance(params?.row?.id)
                                setDeleteMode(true)
                            }}
                        /> */}
            {/* </Tooltip> */}

            {/* <Tooltip id='delete' title='Delete'> */}
            <VisibilityIcon
              className="action_icon"
              title="edit"
              onClick={() => {
                navigate("/grievance/review/55");
              }}
            />
            {/* </Tooltip> */}
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
      // startDate:  startDate ? startDate.isValid(startDate) ? startDate.format('DD/MM/YYYY') : '' : '',
      // endDate: endDate.format('DD/MM/YYYY')
    };
    setQueryParams(updatedQueryParams);
  };

  //==========================================
  // Grievance Delete
  //==========================================
  const deleteGrievance = async () => {
    const success = await deleteSpecificGrievance(selectedGrievance, showToast);
    setDeleteMode(false);
    if (success) {
      fetchGrievances(
        {
          currentPage: paginationModel.page + 1,
          perPage: paginationModel.pageSize,
        },
        queryParams,
        showToast
      );
    }
  };

  // console.log(grievanceList?.rows)

  const rows = [
    {
      id: 14,
      grievance_no: "GRNIC202545903-01",
      received_from: 6,
      communication_type: {
        name: "offline",
        type: "offline",
      },
      grievance_type: 1,
      grievance_subtype: 28,
      policy_no: 0,
      member_no: 0,
      claim_no: 0,
      member_name: "Akash ahuja",
      phone_no: "",
      email: "",
      severity_type: {
        name: "medium",
        type: "medium",
      },
      address: "Kolkata, India",
      remarks: "Test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T07:04:59.278Z",
      createdAt: "2025-02-25T07:04:59.492Z",
      updatedAt: "2025-02-25T07:04:59.492Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Enrollment",
        description: "Enrollment related grievance",
        id: 1,
      },
      grievance_subtype_details: {
        grievance_subtype: "Incorrect Details",
        description: "Errors in personal or policy details in enrollment.",
        id: 28,
      },
      grievance_received_type: {
        id: 6,
        name: "Hospital",
      },
    },
    {
      id: 13,
      grievance_no: 198414160,
      received_from: 3,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 1,
      grievance_subtype: 27,
      policy_no: 891893,
      member_no: 89790,
      claim_no: 654098,
      member_name: "Samrat Awasti",
      phone_no: "8918931175",
      email: "samrat@yopmail.com",
      severity_type: {
        name: "high",
        type: "high",
      },
      address: "Alley Street, 89, Darjeeling",
      remarks: "Action required, it's been 500 Days",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T07:01:34.166Z",
      createdAt: "2025-02-25T07:01:34.818Z",
      updatedAt: "2025-02-25T07:01:34.818Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Enrollment",
        description: "Enrollment related grievance",
        id: 1,
      },
      grievance_subtype_details: {
        grievance_subtype: "Rejection of Enrollment",
        description: "Enrollment application denied without valid reason.",
        id: 27,
      },
      grievance_received_type: {
        id: 3,
        name: "Insurance",
      },
    },
    {
      id: 12,
      grievance_no: 270943612,
      received_from: 6,
      communication_type: {
        name: "offline",
        type: "offline",
      },
      grievance_type: 1,
      grievance_subtype: 28,
      policy_no: 0,
      member_no: 0,
      claim_no: 0,
      member_name: "Abhishek Awasti",
      phone_no: "",
      email: "",
      severity_type: {
        name: "medium",
        type: "medium",
      },
      address: "Lucknow, India",
      remarks: "test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T06:33:15.226Z",
      createdAt: "2025-02-25T06:33:15.457Z",
      updatedAt: "2025-02-25T06:33:15.457Z",
      tat_time: "12 hours",
      grievance_type_details: {
        grievance_type: "Enrollment",
        description: "Enrollment related grievance",
        id: 1,
      },
      grievance_subtype_details: {
        grievance_subtype: "Incorrect Details",
        description: "Errors in personal or policy details in enrollment.",
        id: 28,
      },
      grievance_received_type: {
        id: 6,
        name: "Hospital",
      },
    },
    {
      id: 11,
      grievance_no: 902185349,
      received_from: 6,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 2,
      grievance_subtype: 4,
      policy_no: 0,
      member_no: 0,
      claim_no: 0,
      member_name: "Sneha Prasad",
      phone_no: "",
      email: "",
      severity_type: {
        name: "medium",
        type: "medium",
      },
      address: "Punjab, India",
      remarks: "Test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T06:32:08.569Z",
      createdAt: "2025-02-25T06:32:09.461Z",
      updatedAt: "2025-02-25T06:32:09.461Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Claims",
        description: "Claims related grievance",
        id: 2,
      },
      grievance_subtype_details: {
        grievance_subtype: "Cashless Denied",
        description: "Cashless facility rejected at hospital.",
        id: 4,
      },
      grievance_received_type: {
        id: 6,
        name: "Hospital",
      },
    },
    {
      id: 10,
      grievance_no: 235291197,
      received_from: 6,
      communication_type: {
        name: "offline",
        type: "offline",
      },
      grievance_type: 2,
      grievance_subtype: 3,
      policy_no: 4343,
      member_no: 43434,
      claim_no: 54,
      member_name: "Abhay Ansari",
      phone_no: "8918931174",
      email: "rahulgupta@matrixnmedia.com",
      severity_type: {
        name: "low",
        type: "low",
      },
      address: "Siliguri, WestBengal",
      remarks: "Test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T06:24:36.468Z",
      createdAt: "2025-02-25T06:24:37.071Z",
      updatedAt: "2025-02-25T06:24:37.071Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Claims",
        description: "Claims related grievance",
        id: 2,
      },
      grievance_subtype_details: {
        grievance_subtype: "Partial Settlement",
        description: "Claim approved but only partially paid.",
        id: 3,
      },
      grievance_received_type: {
        id: 6,
        name: "Hospital",
      },
    },
    {
      id: 9,
      grievance_no: 986812790,
      received_from: 4,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 1,
      grievance_subtype: 27,
      policy_no: 0,
      member_no: 0,
      claim_no: 0,
      member_name: "Aman agarwal",
      phone_no: "",
      email: "",
      severity_type: {
        name: "low",
        type: "low",
      },
      address: "Kolkata, India",
      remarks: "test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T06:17:12.054Z",
      createdAt: "2025-02-25T06:17:12.717Z",
      updatedAt: "2025-02-25T06:17:12.717Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Enrollment",
        description: "Enrollment related grievance",
        id: 1,
      },
      grievance_subtype_details: {
        grievance_subtype: "Rejection of Enrollment",
        description: "Enrollment application denied without valid reason.",
        id: 27,
      },
      grievance_received_type: {
        id: 4,
        name: "Company",
      },
    },
    {
      id: 8,
      grievance_no: 70399677,
      received_from: 4,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 1,
      grievance_subtype: 28,
      policy_no: 0,
      member_no: 0,
      claim_no: 0,
      member_name: "Bubai saha",
      phone_no: "",
      email: "",
      severity_type: {
        name: "low",
        type: "low",
      },
      address: "Kestopur, India",
      remarks: "test",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-26T06:09:53.510Z",
      createdAt: "2025-02-25T06:09:53.729Z",
      updatedAt: "2025-02-25T06:09:53.729Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Enrollment",
        description: "Enrollment related grievance",
        id: 1,
      },
      grievance_subtype_details: {
        grievance_subtype: "Incorrect Details",
        description: "Errors in personal or policy details in enrollment.",
        id: 28,
      },
      grievance_received_type: {
        id: 4,
        name: "Company",
      },
    },
    {
      id: 3,
      grievance_no: 430547222,
      received_from: 5,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 4,
      grievance_subtype: 76,
      policy_no: 2345959,
      member_no: 9082390,
      claim_no: 898930,
      member_name: "Anant ansari",
      phone_no: "8918931175",
      email: "rgupta.jan@gmail.com",
      severity_type: {
        name: "medium",
        type: "medium",
      },
      address: "srs, 157 downing street,",
      remarks: "Remarks",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-25T13:40:03.221Z",
      createdAt: "2025-02-24T13:40:03.221Z",
      updatedAt: "2025-02-24T13:40:03.221Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Call Center",
        description: "Call Center related grievance",
        id: 4,
      },
      grievance_subtype_details: {
        grievance_subtype: "Long Wait Times",
        description: "Excessive hold times before connecting to an agent.",
        id: 76,
      },
      grievance_received_type: {
        id: 5,
        name: "Broker",
      },
    },
    {
      id: 2,
      grievance_no: 645237500,
      received_from: 5,
      communication_type: {
        name: "online",
        type: "online",
      },
      grievance_type: 4,
      grievance_subtype: 76,
      policy_no: 2345959,
      member_no: 9082390,
      claim_no: 898930,
      member_name: "Anant ansari",
      phone_no: "8918931175",
      email: "rgupta.jan@gmail.com",
      severity_type: {
        name: "medium",
        type: "medium",
      },
      address: "srs, 157 downing street,",
      remarks: "Remarks",
      status: {
        name: "Pending",
        type: "pending",
      },
      assigned_to: null,
      sla_deadline: "2025-02-25T13:39:11.725Z",
      createdAt: "2025-02-24T13:39:11.726Z",
      updatedAt: "2025-02-24T13:39:11.726Z",
      tat_time: "48 hours",
      grievance_type_details: {
        grievance_type: "Call Center",
        description: "Call Center related grievance",
        id: 4,
      },
      grievance_subtype_details: {
        grievance_subtype: "Long Wait Times",
        description: "Excessive hold times before connecting to an agent.",
        id: 76,
      },
      grievance_received_type: {
        id: 5,
        name: "Broker",
      },
    },
  ];

  return (
    <>
      {/* Grievnace Stats */}
      {/* <div className="dashboard-card-row">
                <div className="dashboard-col">
                    <div className="dashboard-card">
                        <h3 className="dashboard-card-number">50K</h3>
                        <p>Total Grievance</p>
                        <a href="#" className="dashboard-card-link"></a>
                    </div>
                </div>

                <div className="dashboard-col">
                    <div className="dashboard-card">
                        <h3 className="dashboard-card-number">10K</h3>
                        <p>Resolved Cases</p>
                        <a href="#" className="dashboard-card-link"></a>
                    </div>
                </div>

                <div className="dashboard-col">
                    <div className="dashboard-card">
                        <h3 className="dashboard-card-number">50K</h3>
                        <p>Pending Cases</p>
                        <a href="#" className="dashboard-card-link"></a>
                    </div>
                </div>

                <div className="dashboard-col">
                    <div className="dashboard-card">
                        <h3 className="dashboard-card-number">5K</h3>
                        <p>Average Resolution Time</p>
                        <a href="#" className="dashboard-card-link"></a>
                    </div>
                </div>

            </div> */}
      <div>
        {/* Create Grievance */}
        <div className="section-heading-row">
          <h2 className="section-heading">Grievances</h2>
          <Link to={`/grievance/add`} className="admin-primary-button">
            + New Grievance
          </Link>
        </div>
        {/* Search and Filters */}
        <div className="form-field-col-group search-filter no-wrap">
          <div className="search-filter-fldgroup">
            <div className="form-field-col">
              <label className="form-field-label">Search</label>
              <div className="form-field-wrap">
                <input
                  className="field-input"
                  placeholder="Search Text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>
            <div className="form-field-col">
              <label className="form-field-label">Received From</label>
              <div className="form-field-wrap">
                <Autocomplete
                  className="autosearch-select"
                  options={commonDropdown || []}
                  getOptionLabel={(option) => (option ? option.name : "")}
                  isOptionEqualToValue={(option, value) =>
                    option.key === value?.key
                  }
                  value={null}
                  // onChange={(e, val) => {
                  //     field.onChange(val);
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className=""
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
                  className="autosearch-select"
                  options={commonDropdown || []}
                  getOptionLabel={(option) => (option ? option.name : "")}
                  isOptionEqualToValue={(option, value) =>
                    option.key === value?.key
                  }
                  value={null}
                  // onChange={(e, val) => {
                  //     field.onChange(val);
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className=""
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
                  className="autosearch-select"
                  options={commonDropdown || []}
                  getOptionLabel={(option) => (option ? option.name : "")}
                  isOptionEqualToValue={(option, value) =>
                    option.key === value?.key
                  }
                  value={null}
                  // onChange={(e, val) => {
                  //     field.onChange(val);
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className=""
                      variant="outlined"
                      placeholder="Status"
                    />
                  )}
                />
              </div>
            </div>
            <div className="form-field-col">
              <label className="form-field-label">Received Date</label>
              <div className="form-field-wrap">
                <Autocomplete
                  className="autosearch-select"
                  options={commonDropdown || []}
                  getOptionLabel={(option) => (option ? option.name : "")}
                  isOptionEqualToValue={(option, value) =>
                    option.key === value?.key
                  }
                  value={null}
                  // onChange={(e, val) => {
                  //     field.onChange(val);
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className=""
                      variant="outlined"
                      placeholder="Received From"
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
                    className="field-input-date"
                    maxDate={endDate}
                    format="DD/MM/YYYY"
                    value={startDate}
                    onChange={(value) => {
                      setStartDate(value);
                    }}
                    slotProps={{
                      textField: {
                        error: false, // Prevents red border
                        sx: {
                          "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                            {
                              borderColor: "rgba(0, 0, 0, 0.23)", // Default MUI border color
                            },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="form-field-col">
              <label className="form-field-label">End Date</label>
              <div className="form-field-wrap">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="field-input-date"
                    minDate={startDate}
                    format="DD/MM/YYYY"
                    value={endDate}
                    onChange={(value) => {
                      setEndDate(value);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          {/* <div className="form-field-col button-col">
                        <button onClick={handleFilteration} className="admin-icon-button">
                            <SearchIcon />
                        </button>
                    </div> */}
        </div>
        {/* Listing */}
        <div className="admin-data-table">
          <DataGrid
            {...dataGridCommonProps}
            rows={rows}
            // rows={rows}
            columns={columns}
            // paginationModel={paginationModel}
            // loading={grievanceList.loading}
            // rowCount={grievanceList.total}
            // pageSizeOptions={paginationConfig.DEFAULT_PAGE_SIZE_OPTIONS}
            // onPaginationModelChange={(pageInfo) => {
            //     fetchGrievances({
            //         currentPage: pageInfo.page + 1,
            //         perPage: pageInfo.pageSize,
            //     }, queryParams, showToast);
            //     setPaginationModel(pageInfo);
            // }}
          />
        </div>
      </div>
      {deleteMode && (
        <ConfirmationModal
          open={deleteMode}
          setOpen={setDeleteMode}
          performAction={deleteGrievance}
          loading={loading}
          icon={iconType.Warning}
          heading={"Are you sure you want to delete this?"}
          subheading={"This action cannot be undone."}
        />
      )}
    </>
  );
};

export default GrievanceReview;
