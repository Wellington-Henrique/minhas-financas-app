export const rgxValidDate = (value: string) => {
    let pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return pattern.test(value);
}

export const isIsoDate = (date: string) => {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)) return false;
    const d = new Date(date); 
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === date;
}