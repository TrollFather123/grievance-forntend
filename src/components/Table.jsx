import React from "react";

export const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
};

export const headerStyle = {
  backgroundColor: "#1b84ff",
  color: "#ffffff",
  textAlign: "left",
  padding: "10px",
};

export const rowStyle = {
  borderBottom: "1px solid #ddd",
};

export const cellStyle = {
  padding: "10px",
};

const GrievanceStatsTable = () => {
  const data = [
    { description: "Total No of Cases", count: 90 },
    { description: "Total No of Open Cases", count: 50 },
    { description: "Total No of Closed Cases", count: 40 },
    { description: "Under Process < 30 mins", count: 10 },
    { description: "Under Process More than 30 mins", count: 40 },
  ];

  return (
    <>
      <div style={{ margin: "20px", padding: "10px" }}>
        <h3 style={{ textAlign: "center", color: "#1b84ff" }}>
          Overall Grievance Statistics
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr style={rowStyle}>
              <th style={headerStyle}>DESCRIPTION</th>
              <th style={headerStyle}>COUNT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={rowStyle}>
                <td style={cellStyle}>{item.description}</td>
                <td style={cellStyle}>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GrievanceStatsTable;
