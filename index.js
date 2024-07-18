/**
 * Generates a random email address.
 * @param {Object} options - Configuration options.
 * @param {number} [options.length=5] - Length of the email username.
 * @param {string} [options.domain="example.com"] - Domain of the email.
 * @param {boolean} [options.capitalize=false] - Whether to capitalize the username.
 * @param {boolean} [options.includeNumbers=true] - Whether to include numbers in the username.
 * @param {boolean} [options.includeSpecialChars=false] - Whether to include special characters in the username.
 * @returns {string} - Generated email address.
 */
 function randomEmail({
    length = 5,
    domain = "example.com",
    capitalize = false,
    includeNumbers = true,
    includeSpecialChars = false
} = {}) {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) {
        characters += "0123456789";
    }
    if (includeSpecialChars) {
        characters += "!#$%&'*+/=?^_`{|}~-";
    }
    const charactersLength = characters.length;
    const adjustedLength = length > 32 ? 32 : length;
    for (let i = 0; i < adjustedLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (capitalize) {
        result = result.toUpperCase();
    }
    result += "@" + domain;

    return result;
}


/**
 * Generates a random password.
 * @param {Object} options - Configuration options.
 * @param {number} [options.minLength=8] - Minimum length of the password.
 * @param {number} [options.maxLength=20] - Maximum length of the password.
 * @param {boolean} [options.includeNumbers=true] - Whether to include numbers in the password.
 * @param {boolean} [options.includeLowercase=true] - Whether to include lowercase letters in the password.
 * @param {boolean} [options.includeUppercase=true] - Whether to include uppercase letters in the password.
 * @param {boolean} [options.includeSpecialChars=true] - Whether to include special characters in the password.
 * @returns {string} - Generated password.
 */
 function randomPassword({
    minLength = 8,
    maxLength = 20,
    includeNumbers = true,
    includeLowercase = true,
    includeUppercase = true,
    includeSpecialChars = true
} = {}) {
    const numeric = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special = "`!@#$%^&*()_+-=[]{};:'\\|,.<>/?~";
    
    let charset = "";
    if (includeNumbers) charset += numeric;
    if (includeLowercase) charset += lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeSpecialChars) charset += special;

    if (charset === "") {
        throw new Error("At least one character type should be included in the password.");
    }

    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let retVal = "";

    if (includeNumbers) retVal += numeric.charAt(Math.floor(Math.random() * numeric.length));
    if (includeLowercase) retVal += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    if (includeUppercase) retVal += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    if (includeSpecialChars) retVal += special.charAt(Math.floor(Math.random() * special.length));

    for (let i = retVal.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return retVal
        .split("")
        .sort(() => 0.5 - Math.random())
        .join("");
}


/**
 * Generates a random email and password.
 * 
 * @param {number} emailLength - Length of the email's local part.
 * @param {string} domain - Domain of the email.
 * @param {Object} passwordOptions - Options for generating the password.
 * @param {number} [passwordOptions.minLength=8] - Minimum length of the password.
 * @param {number} [passwordOptions.maxLength=20] - Maximum length of the password.
 * @param {boolean} [passwordOptions.includeNumbers=true] - Whether to include numbers in the password.
 * @param {boolean} [passwordOptions.includeLowercase=true] - Whether to include lowercase letters in the password.
 * @param {boolean} [passwordOptions.includeUppercase=true] - Whether to include uppercase letters in the password.
 * @param {boolean} [passwordOptions.includeSpecialChars=true] - Whether to include special characters in the password.
 * @returns {Object} - An object containing the generated email and password.
 */
 function generateEmailAndPassword(emailLength, domain, passwordOptions = {}) {
    const email = randomEmail(emailLength, domain);
    const password = randomPassword(passwordOptions);
    return { email, password };
}


module.exports = { randomEmail, randomPassword, generateEmailAndPassword };