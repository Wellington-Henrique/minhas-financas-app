import { dateFormatter } from "../../utils/formatter";

const dt = new Date();

export const initialValues = {
    startDate: dateFormatter(new Date(dt.getFullYear(), dt.getMonth(), 1), 'fr-CA'),
    endDate: dateFormatter(dt, 'fr-CA')
}