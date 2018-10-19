export const STATUS = {
    "00": "PENDING SUBMISSION",
    "01": "AWAITING HOD APPROVAL",
    "010": "HOD DECLINE APPROVAL, MAKE CORRECTIONS",
    "011": "HOD APPROVED",
    "X": "REQUEST CANCELLED", 
};

export function getStatus(status){
    return STATUS[status];
}