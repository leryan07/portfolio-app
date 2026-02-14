export const getFormattedDate = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() is zero-based
    const day = now.getDate();
    const year = now.getFullYear().toString().slice(-2); // last two digits

    return `${month}/${day}/${year}`;
};

export function convertToLocalTime(utcString) {
    const utcDate = new Date(utcString);
    return utcDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
};
