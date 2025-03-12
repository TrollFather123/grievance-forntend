import React, { useCallback, useState } from "react";
import CorporateDetails from "src/components/CorporateDetails";
import EnrollmentDetails from "src/components/EnrollmentDetails";
import PolicyDetails from "src/components/PolicyDetails";
import ViewGrievanceDetails from "src/components/ViewGrievanceDetails";
import CalculationSheet from "./calculationSheet";


const GrievanceView = () => {
  const [openModules, setOpenModules] = useState([]);

  const handleModules = useCallback((data) => {
    setOpenModules((prevModules) => {
      const exists = prevModules.some(
        (module) => module.moduleName === data.moduleName
      );
      return exists ? prevModules : [...prevModules, data];
    });
  }, []);
  
  return (
    <>
      <ViewGrievanceDetails handleModules={handleModules} />
      {openModules.map((module, index) => (
        <div key={index}>
          {module.moduleName === "policy" && (
            <PolicyDetails moduleId={module.moduleId} />
          )}
          {module.moduleName === "enrollment" && (
            <EnrollmentDetails moduleId={module.moduleId} />
          )}
          {module.moduleName === "corporate" && (
            <CorporateDetails moduleId={module.moduleId} />
          )}
          {module.moduleName === "calculation" && (
            <CalculationSheet/>
          )}
        </div>
      ))}
      
    </>
  );
};

export default GrievanceView;
