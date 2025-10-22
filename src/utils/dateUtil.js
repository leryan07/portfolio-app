export const getFormattedDate = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() is zero-based
    const day = now.getDate();
    const year = now.getFullYear().toString().slice(-2); // last two digits

    return `${month}/${day}/${year}`;
};
