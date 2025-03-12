const REGEX = Object.freeze({
    ALPHA: /^$|^[a-zA-Z]+$/,                           // Only alphabets (optional)
    ALPHA_SPACE: /^$|^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,     // Alphabets with spaces (optional)
    ALPHA_NUM: /^$|^[a-zA-Z0-9]+$/,                    // Alphanumeric (optional)
    ALPHA_NUM_SPACE: /^$|^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/, // Alphanumeric with spaces (optional)
    ALPHA_NUM_SPECIAL: /^$|^[a-zA-Z0-9#@$&]+$/,        // Alphanumeric with specific special chars (optional)
    NUM: /^$|^\d+$/,                                   // Only Numbers (optional)
    DECIMAL: /^$|^\d+(\.\d{1,8})?$/,                   // Floating Point Number (optional)
    INDIAN_PHONE: /^$|^[6-9]\d{9}$/,             // Indian Phone Number (optional)
    ADDRESS: /^$|^[a-zA-Z0-9\s,.-\/#]+$/,         // Address (optional)
    EMAIL: /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
});


export default REGEX;