const dt = new Date();

export const initialValues = {
    startDate: new Date(dt.getFullYear(), dt.getMonth(), 1).toISOString(),
    endDate: new Date(dt.getFullYear(), dt.getMonth() + 1, 0).toISOString()
}