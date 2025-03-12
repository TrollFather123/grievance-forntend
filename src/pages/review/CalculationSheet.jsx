import React from "react";
import "./CalculationSheet.css";

const CalculationSheet = () => {
  return (
    <div className="calculation-sheet">
      <h2 className="header">Calculation Sheet</h2>

      <div className="table">
        <div className="row">
          <div className="column">
            <label>Hos Period</label>
            <input type="text" placeholder="DUR"  />
          </div>
          <div className="column">
            <label>Service Type</label>
            <input type="text" placeholder="Professional fees charges"  />
          </div>
          <div className="column">
            <label>Amount</label>
            <input type="text" placeholder="8000.00"  />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <input type="text" placeholder="DUR"  />
          </div>
          <div className="column">
            <input type="text" placeholder="Total"  />
          </div>
          <div className="column">
            <input type="text" placeholder="8000.00"  />
          </div>
        </div>
      </div>

      <div className="bill-breakup">
        <h3>Bill Breakup</h3>
        <p>Please select any group to view breakups.</p>
      </div>

      <div className="details">
        {[
          "Total Bill Amount",
          "Amount Claimed",
          "Amount Deducted",
          "Total Discount",
          "Special/any other discount",
          "Paid by Patient",
          "Security Deposit",
          "Admissible Amount",
          "Co-Pay Amount",
          "Balance SI",
          "Net Amount",
          "Provision Amount",
        ].map((label, index) => (
          <div className="detail-row" key={index}>
            <label>{label}:</label>
            <input
              type="text"
              placeholder={["8000.00", "8000.00", "0.00", "0.00", "0.00", "0.00", "0.00", "8000.00", "0.00", "279000", "8000.00", "8000.00"][index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculationSheet;
