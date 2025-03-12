import React from "react";

const GrievanceStatistics = () => {
  const containerStyle = {
    margin: "20px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    backgroundColor: "#1b84ff",
    color: "#ffffff",
    textAlign: "left",
    padding: "10px",
  };

  const rowStyle = {
    borderBottom: "1px solid #ddd",
  };

  const cellStyle = {
    padding: "10px",
  };

  const cardStyle = {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    margin: "10px",
  };

  const cardHeaderStyle = {
    backgroundColor: "#1b84ff",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px 8px 0 0",
  };

  const moduleContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const yearlyData = [
    { year: "2022-23", openCases: 10, closedCases: 10 },
    { year: "2023-24", openCases: 7, closedCases: 12 },
  ];

  const moduleData = [
    {
      name: "CLAIMS",
      details: [
        { description: "Total No of Cases", count: 39 },
        { description: "Total No of Open Cases", count: 17 },
        { description: "Total No of Closed Cases", count: 22 },
        { description: "Under Process < 30 mins", count: 0 },
        { description: "Under Process More than 30 mins", count: 22 },
      ],
      yearly: [
        { year: "2022-23", openCases: 10, closedCases: 10 },
        { year: "2023-24", openCases: 7, closedCases: 12 },
      ],
    },
    {
      name: "ENROLLMENT",
      details: [
        { description: "Total No of Cases", count: 39 },
        { description: "Total No of Open Cases", count: 17 },
        { description: "Total No of Closed Cases", count: 22 },
        { description: "Under Process < 30 mins", count: 0 },
        { description: "Under Process More than 30 mins", count: 22 },
      ],
      yearly: [
        { year: "2022-23", openCases: 15, closedCases: 10 },
        { year: "2023-24", openCases: 2, closedCases: 12 },
      ],
    },
    {
      name: "PROVIDERS",
      details: [
        { description: "Total No of Cases", count: 39 },
        { description: "Total No of Open Cases", count: 17 },
        { description: "Total No of Closed Cases", count: 22 },
        { description: "Under Process < 30 mins", count: 0 },
        { description: "Under Process More than 30 mins", count: 22 },
      ],
      yearly: [
        { year: "2022-23", openCases: 60, closedCases: 50 },
        { year: "2023-24", openCases: 70, closedCases: 65 },
      ],
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Yearly Grievance Statistics */}
      <h3 style={{ textAlign: "center", color: "#1b84ff" }}>
        Yearly Grievance Statistics
      </h3>
      <table style={tableStyle}>
        <thead>
          <tr style={rowStyle}>
            <th style={headerStyle}>YEAR</th>
            <th style={headerStyle}>OPEN CASES</th>
            <th style={headerStyle}>CLOSED CASES</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((item, index) => (
            <tr key={index} style={rowStyle}>
              <td style={cellStyle}>{item.year}</td>
              <td style={cellStyle}>{item.openCases}</td>
              <td style={cellStyle}>{item.closedCases}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Module-wise Grievance Received */}
      <h3 style={{ textAlign: "center", color: "#1b84ff", marginTop: "30px" }}>
        Module-wise Grievance Received
      </h3>
      <div style={moduleContainerStyle}>
        {moduleData.map((module, index) => (
          <div key={index} style={cardStyle}>
            <div style={cardHeaderStyle}>{module.name}</div>
            <table style={tableStyle}>
              <thead>
                <tr style={rowStyle}>
                  <th style={headerStyle}>DESCRIPTION</th>
                  <th style={headerStyle}>COUNT</th>
                </tr>
              </thead>
              <tbody>
                {module.details.map((detail, idx) => (
                  <tr key={idx} style={rowStyle}>
                    <td style={cellStyle}>{detail.description}</td>
                    <td style={cellStyle}>{detail.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrievanceStatistics;
