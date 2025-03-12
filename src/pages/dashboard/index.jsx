import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOAST_TYPE } from 'src/consts/common';
import { useToaster } from 'src/context/TosterContext';
import BackDropLoader from 'src/components/loaders/BackDropLoader';
import LinearLoader from 'src/components/loaders/LinearLoader';
// import { kc } from 'src/utils/keycloakSetup';

const Dashboard = () => {
  const {showToast} = useToaster();
  const navigate = useNavigate();
  // useEffect(()=>{
  //   showToast("User Logged In.", TOAST_TYPE.SUCCESS)
  // },[])
  return (
    <>
      <div>
        <div className="section-heading-row">
            <h2 className="section-heading">Grievance Dashboard</h2>
            {/* <Link to={`/grievance/add`} className="admin-primary-button">+ New Grievance</Link> */}
        </div>

        {/* Overall Grievance Statistics section start */}
        <div className="dashbrd-card-row card-row-opened noborder">
          <div className="dashbrd-card-header withbg"><h5 className="dashbrd-card-header-title">Overall Grievance Statistics</h5></div>
          <div className="dashbrd-card-content">
            <div className="dashbrd-card-content-inner nogap">
              
              <div className="admin-dashbrd-tbl-wrap">
                <table className="admin-dashbrd-table overall-statistics">
                  <thead>
                    <tr>
                      <th>DESCRIPTION</th>
                      <th>COUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total No of Cases</td>
                      <td><b>90</b></td>
                    </tr>
                    <tr>
                      <td>Total No of Open Cases</td>
                      <td><b>50</b></td>
                    </tr>
                    <tr>
                      <td>Total No of Closed Cases</td>
                      <td><b>40</b></td>
                    </tr>
                    <tr>
                      <td>Under Process &lt; 30 Days</td>
                      <td><b>40</b></td>
                    </tr>
                    <tr>
                      <td>Under Process more than 30 Days</td>
                      <td><b>40</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        {/* Overall Grievance Statistics section ended */}



        {/* yearly Grievance Statistics section start */}
        <div className="dashbrd-card-row card-row-opened noborder">
          <div className="dashbrd-card-header withbg"><h5 className="dashbrd-card-header-title">Yearly Grievance Statistics</h5></div>
          <div className="dashbrd-card-content">
            <div className="dashbrd-card-content-inner nogap">
              
              <div className="admin-dashbrd-tbl-wrap noborder">
                <table className="admin-dashbrd-table yearly-statistics">
                  <thead>
                    <tr>
                      <th>YEAR</th>
                      <th>OPEN CASES</th>
                      <th>CLOSED CASES</th>
                      <th>TOTAL CASES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="year-col">2024-25</td>
                      <td className="oc-col">10</td>
                      <td className="cc-col">12</td>
                      <td className="tc-col">22</td>
                    </tr>
                    <tr>
                      <td className="year-col">2023-24</td>
                      <td className="oc-col">10</td>
                      <td className="cc-col">12</td>
                      <td className="tc-col">22</td>
                    </tr>
                    <tr>
                      <td className="year-col">2022-23</td>
                      <td className="oc-col">10</td>
                      <td className="cc-col">12</td>
                      <td className="tc-col">22</td>
                    </tr>
                    <tr>
                      <td className="year-col">2021-22</td>
                      <td className="oc-col">10</td>
                      <td className="cc-col">12</td>
                      <td className="tc-col">22</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        {/* yearly Grievance Statistics section ended */}



        {/* module wise Grievance section start */}
        <div className="dashbrd-card-row card-row-opened noborder">
          <div className="dashbrd-card-header withbg"><h5 className="dashbrd-card-header-title">Module Wise Grievance Received</h5></div>
          <div className="dashbrd-card-content">
            <div className="dashbrd-card-content-inner nogap">

                <div className="admin-dashbrd-tbl-row">


                  <div className="admin-dashbrd-tbl-col">
                    <h5 className="dashbrd-card-header-title">Claims</h5>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="admin-dashbrd-tbl-col">
                    <h5 className="dashbrd-card-header-title">Enrollment</h5>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise-2">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>


                </div>



            </div>
          </div>
        </div>
        {/* module wise Grievance section ended */}



        {/* portal section start */}
        <div className="dashbrd-card-row card-row-opened noborder">
          <div className="dashbrd-card-header withbg"><h5 className="dashbrd-card-header-title">Portal</h5></div>
          <div className="dashbrd-card-content">
            <div className="dashbrd-card-content-inner nogap">
              <div className="admin-dashbrd-tbl-row">


                <div className="admin-dashbrd-tbl-col column-3">
                  <h5 className="dashbrd-card-header-title">Provider</h5>
                  <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise-3">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                </div>

                <div className="admin-dashbrd-tbl-col column-3">
                  <h5 className="dashbrd-card-header-title">Corporate</h5>
                  <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                </div>

                <div className="admin-dashbrd-tbl-col column-3">
                  <h5 className="dashbrd-card-header-title">Member</h5>
                  <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                </div>

                <div className="admin-dashbrd-tbl-col">
                  <h5 className="dashbrd-card-header-title">Brokers</h5>
                  <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                </div>

                <div className="admin-dashbrd-tbl-col">
                  <h5 className="dashbrd-card-header-title">Agents</h5>
                  <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table module-wise-3">
                        <thead>
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>COUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total No of Cases</td>
                            <td><b>90</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Open Cases</td>
                            <td><b>50</b></td>
                          </tr>
                          <tr>
                            <td>Total No of Closed Cases</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process &lt; 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                          <tr>
                            <td>Under Process more than 30 Days</td>
                            <td><b>40</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="admin-dashbrd-tbl-wrap">
                      <table className="admin-dashbrd-table yearly-statistics nospace text-center">
                        <thead>
                          <tr>
                            <th>YEAR</th>
                            <th>OPEN CASES</th>
                            <th>CLOSED CASES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-25</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>2023-24</td>
                            <td>10</td>
                            <td>12</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;




