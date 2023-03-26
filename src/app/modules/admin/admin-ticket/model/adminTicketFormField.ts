import { AdminTicketFormFieldOption } from "./adminTicketFormFieldOption";

export interface AdminTicketFormField {
    id: number,
    key: string,
    label: string,
    required: boolean,
    order: number,
    controlType: string,
    options: Array<AdminTicketFormFieldOption>
    type: string
}