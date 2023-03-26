import { AdminTicketFormField } from "./adminTicketFormField"

export interface AdminTicketForm {
    id: number,
    label: string,
    subCategoryId: number
    ticketFormFields: Array<AdminTicketFormField>
}