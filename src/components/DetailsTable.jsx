import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DetailsTable = ({ tableHeadList, children }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "calc(100vw - 304px)",
        th: { minWidth: "170px", bgcolor: "#1b84ff", color: "#fff " ,fontWeight:600 },
      }}
    >
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadList?.map((data) => (
              <TableCell key={data}>{data}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
