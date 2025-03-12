import DetailsTable from "./DetailsTable";
import { TableCell, TableRow } from "@mui/material";

const CorporateDetails = ({ moduleId }) => {
  console.log(moduleId);
  const corporateHeaders = [
    "Corporate Name",
    "Policy No",
    "PIN",
    "Address",
    "Corporate Id",
  ];

  const enrollmentData = [
    {
      corporateName: "IBA",
      policyNo: "202532631",
      pin: "201301",
      address: "NOIDA",
      corporateId: "202532631111144",
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="section-heading-row">
        <h3 className="section-heading">View Corporate Details</h3>
      </div>
      <DetailsTable tableHeadList={corporateHeaders}>
        {enrollmentData?.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.corporateName}</TableCell>
            <TableCell>{item.policyNo}</TableCell>
            <TableCell>{item.pin}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.corporateId}</TableCell>
          </TableRow>
        ))}
      </DetailsTable>
    </div>
  );
};

export default CorporateDetails;
