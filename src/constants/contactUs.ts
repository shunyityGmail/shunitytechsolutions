import { contacts } from "./shunyityContacts"

export const TITLE = "CONTACT US"
export const FORM__TITLE = "GET IN TOUCH"
export const HEADING = "Contact for any Kind of Information"
export const SUBMIT = "SUBMIT"

export const CONTACT__INFORMATION = [
    {icon:'/location.svg', title:'Location', info_1:contacts.address1, info_2:contacts.address3},
    {icon:'/email.svg', title:'Email', info_1:contacts.email, info_2:contacts.email},
    {icon:'/support.svg', title:'Phone', info_1:contacts.phone, info_2:contacts.phone}
]