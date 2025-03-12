import DetailsTable from "./DetailsTable";
import { TableCell, TableRow } from "@mui/material";

const EnrollmentDetails = ({ moduleId }) => {
  console.log(moduleId);
  const headerList = [
    "Member Name",
    "Email",
    "Phone Number",
    "Address",
    "Pincode",
    "Age",
    "Gender",
  ];

  const enrollmentData =[
    {
      memberName: "Sumit Vikal",
      email: "M12444",
      phoneNumber: "sumitdev@test.com",
      address: "9811992299",
      pincode: "201301",
      age: "32",
      gender: "male",
    }
  ]

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="section-heading-row">
        <h3 className="section-heading">View Enrollment Details</h3>
      </div>
      <DetailsTable tableHeadList={headerList}>
        {enrollmentData?.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.memberName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.pinCode}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.gender}</TableCell>
          </TableRow>
        ))}
      </DetailsTable>
    </div>
  );
};

export default EnrollmentDetails;
