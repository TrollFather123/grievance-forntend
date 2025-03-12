
export const APIEndpoints = {

    // General
    fileUploadS3: '/s3/manage-file', 
    getEmployees: '/employee/info', 
    
    // Grievance
    grievances: '/grievance/grievance',
    grievanceCreate: '/grievance/create-grievance',
    grievanceDelete: '/grievance/delete-grievance',
    grievanceTypes: '/grievance_types/types',
    grievanceSubTypes:  '/grievance_subtypes/subtypes',
    grievanceReceivedFromList: 'grievance_received/recipient',

    // History
    history: '/grievance_history/history'
}