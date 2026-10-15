// ** Validate Bangladeshi Mobile Number

function isValidBangladeshiMobileNumber(phoneNumber) {
    const regex = /^(01[3-9]\d{8}|\+8801[3-9]\d{8}|8801[3-9]\d{8})$/;

    return regex.test(phoneNumber);
}