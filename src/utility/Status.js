export const STATUS = {
    "00": "PENDING SUBMISSION",
    "01": "AWAITING HOD APPROVAL",
    "010": "HOD DECLINE APPROVAL, MAKE CORRECTIONS",
    "011": "HOD APPROVED",
    "RFQ01": "Awaiting Vendor Response",
    "RFQ02": "Vendor Responded",
    "RFQ03": "Procurement Approved",
    "RFQ04": "Procurement Disapproved, With Reason", 
    "PO01": "Approved and Awaiting Delivery",
    "PO02": "Delivered",
    "X": "REQUEST CANCELLED", 
};

export function getStatus(status){
    return STATUS[status];
}