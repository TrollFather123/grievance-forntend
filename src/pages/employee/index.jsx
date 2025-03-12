import  { useEffect, useState } from 'react';
import FileUpload from 'src/components/FileUpload/FileUploadSingle';
import BackDropLoader from 'src/components/loaders/BackDropLoader';
import { FILE_INPUT } from 'src/consts/common';
import { useToaster } from 'src/context/TosterContext';
import useEmployeeStore from 'src/store/useEmployeeStore';

const Employee = () => {
    
    const {showToast} = useToaster();
    const [page, setPage] = useState(1);
    const [ setEmployeeDocument] = useState(null)
    const { 
        loading, employeeList,
        fetchEmployees
    } = useEmployeeStore();

    useEffect(() => {
        fetchEmployees({currentPage: page, perPage: 2 }, {}, showToast);
    }, [page])
    
    return (
        <div>
            <div>
                {
                    employeeList?.rows.map((emp, idx)=>{
                        return <li key={`emp-${idx}`}>EMP : {emp?.full_name}</li>
                    })
                }
                <div style={{display:'flex'}}>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(1)}}>1</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(2)}}>2</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(3)}}>3</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(4)}}>4</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(5)}}>5</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(6)}}>6</div>
                    <div style={{border:'1px solid gray', padding: '10px', cursor: 'pointer'}} onClick={()=>{setPage(7)}}>7</div>
                </div>
            </div>
            <FileUpload
                filetype={FILE_INPUT?.IMAGES}
                setFileInfoState={setEmployeeDocument}
            />
            {
                (loading || employeeList?.loading )
                &&
                <BackDropLoader />
            }
        </div>
    )
}

export default Employee