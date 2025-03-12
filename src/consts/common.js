export const PASSWORD_TYPE = Object.freeze({
    SHOW: 'text',
    HIDE: 'password'
})

export const APP_ENVIRONMENT = Object.freeze({
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
})

export const TOAST_TYPE = Object.freeze({
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning'
})

export const paginationConfig = Object.freeze({
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_PAGE_SIZE_OPTIONS: [5, 10, 20]
})

export const FILE_INPUT = Object.freeze({
    IMAGES: {
        TYPES: ".jpg,.jpeg,.png",
        MIMES: ["image/jpeg", "image/png", "image/jpg"],
        ERROR_MESSAGE: 'Allowed files .jpg, .jpeg, .png',
        FILE_SIZE: {
            SIZE: 512000, // (500 * 1024)
            ERROR_MESSAGE: 'File size exceeds 5kb'
        }
    },
    PDF: {
        TYPES: ".pdf",
        MIMES: ["application/pdf"],
        FILE_SIZE: {
            SIZE: 512000, // (500 * 1024)
            ERROR_MESSAGE: 'File size exceeds 5kb'
        }
    },
    CSV: {
        TYPES: ".csv",
        MIMES: ["text/csv", "application/vnd.ms-excel"],
        FILE_SIZE: {
            SIZE: 512000, // (500 * 1024)
            ERROR_MESSAGE: 'File size exceeds 5kb'
        }
    },
    IMAGES_PDF: {
        TYPES: ".jpg,.jpeg,.png,.pdf",
        MIMES: ["image/jpeg", "image/png", "image/jpg","application/pdf"],
        ERROR_MESSAGE: 'Allowed files .jpg, .jpeg, .png, .pdf',
        FILE_SIZE: {
            SIZE: 512000, // (500 * 1024)
            ERROR_MESSAGE: 'File size exceeds 500kb'
        }
    }
})

export const severityTypes = Object.freeze({
    Low: "low",
    Medium: "medium",
    High: "high",
    Critical: "critical",
})

export const grievanceStatusTypes = Object.freeze({
    Pending: "pending",
    In_Progress: "in_progress",
    Resolved: "resolved",
    Closed: "closed",
})

export const iconType = Object.freeze({
    Warning: 'warning',
    Info: 'info'
})

