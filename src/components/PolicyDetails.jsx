import DetailsTable from "./DetailsTable";
import { TableCell, TableRow } from "@mui/material";

const PolicyDetails = ({ moduleId }) => {
  console.log(moduleId);
  const headerList = [
    "Policy No",
    "Member No",
    "Member Name",
    "Employee Id",
    "Policy Commencement Date",
    "Policy Expiry Date",
    "Org Joining Date",
    "Primary Insured Name",
    "Dependant Name",
    "Age",
    "Gender",
    "DOB",
    "Relation with Proposer",
    "Nominee Name",
    "Nominee Relation",
    "Nominee DOB",
    "Batch No",
    "Address",
    "Pin Code",
    "Entered By",
    "Entry Time",
    "Is Active",
  ];

  const dataObject = [
    {
      policyNo: "202532631",
      memberNo: "202534442631",
      memberName: "Sumit Vikal",
      employeeId: "M12444",
      policyCommencemenTableCellate: "01/01/2020",
      policyExpiryDate: "01/01/2025",
      orgJoiningDate: "05/12/2019",
      primaryInsuredName: "John Doe",
      dependantName: "Mary Doe",
      age: "Yes",
      gender: "Male",
      dob: "01/01/1990",
      relationWithProposer: "Spouse",
      nomineeName: "Jane Doe",
      nomineeRelation: "Spouse",
      nomineeDOB: "01/01/1992",
      batchNo: "BATCH123",
      address: "123 Main St",
      pinCode: "123456",
      enteredBy: "Admin",
      entryTime: "12:00 PM",
      isActive: "Yes",
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="section-heading-row">
        <h3 className="section-heading">View Policy Details</h3>
      </div>
      <DetailsTable tableHeadList={headerList}>
        {dataObject?.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.policyNo}</TableCell>
            <TableCell>{item.memberNo}</TableCell>
            <TableCell>{item.memberName}</TableCell>
            <TableCell>{item.employeeId}</TableCell>
            <TableCell>{item.policyCommencemenTableCellate}</TableCell>
            <TableCell>{item.policyExpiryDate}</TableCell>
            <TableCell>{item.orgJoiningDate}</TableCell>
            <TableCell>{item.primaryInsuredName}</TableCell>
            <TableCell>{item.dependantName}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>{item.dob}</TableCell>
            <TableCell>{item.relationWithProposer}</TableCell>
            <TableCell>{item.nomineeName}</TableCell>
            <TableCell>{item.nomineeRelation}</TableCell>
            <TableCell>{item.nomineeDOB}</TableCell>
            <TableCell>{item.batchNo}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.pinCode}</TableCell>
            <TableCell>{item.enteredBy}</TableCell>
            <TableCell>{item.entryTime}</TableCell>
            <TableCell>{item.isActive}</TableCell>
          </TableRow>
        ))}
      </DetailsTable>
    </div>
  );
};

export default PolicyDetails;
