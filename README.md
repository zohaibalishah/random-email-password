# Random Email and Password Generator

This module provides functions to generate random email addresses and passwords with customizable options.

## Install
```
$ npm install --save random-email-password
```
## Example Usage
```
var randomEmailPassword = require('random-email-password');

OR

const {randomEmail,randomPassword,generateEmailAndPassword}=require('random-email-password');

    // API
    // randomEmailPassword([options]);
    
    // options
    // - domain
    // - length 
    // - capitalize 
    // - includeNumbers 
    // - includeSpecialChars
```

## Functions

### `randomEmail(options)`

Generates a random email address.

#### Parameters:
- `options` (Object): Configuration options.
  - `length` (number, optional): Length of the email username. Default is 5.
  - `domain` (string, optional): Domain of the email. Default is "example.com".
  - `capitalize` (boolean, optional): Whether to capitalize the username. Default is false.
  - `includeNumbers` (boolean, optional): Whether to include numbers in the username. Default is true.
  - `includeSpecialChars` (boolean, optional): Whether to include special characters in the username. Default is false.

#### Returns:
- `string`: Generated email address.

### `randomPassword(options)`

Generates a random password.

#### Parameters:
- `options` (Object): Configuration options.
  - `minLength` (number, optional): Minimum length of the password. Default is 8.
  - `maxLength` (number, optional): Maximum length of the password. Default is 20.
  - `includeNumbers` (boolean, optional): Whether to include numbers in the password. Default is true.
  - `includeLowercase` (boolean, optional): Whether to include lowercase letters in the password. Default is true.
  - `includeUppercase` (boolean, optional): Whether to include uppercase letters in the password. Default is true.
  - `includeSpecialChars` (boolean, optional): Whether to include special characters in the password. Default is true.

#### Returns:
- `string`: Generated password.

### `generateEmailAndPassword(emailLength, domain, passwordOptions)`

Generates a random email and password.

#### Parameters:
- `emailLength` (number): Length of the email's local part.
- `domain` (string): Domain of the email.
- `passwordOptions` (Object, optional): Options for generating the password.
  - `minLength` (number, optional): Minimum length of the password. Default is 8.
  - `maxLength` (number, optional): Maximum length of the password. Default is 20.
  - `includeNumbers` (boolean, optional): Whether to include numbers in the password. Default is true.
  - `includeLowercase` (boolean, optional): Whether to include lowercase letters in the password. Default is true.
  - `includeUppercase` (boolean, optional): Whether to include uppercase letters in the password. Default is true.
  - `includeSpecialChars` (boolean, optional): Whether to include special characters in the password. Default is true.

#### Returns:
- `Object`: An object containing the generated email and password.

## Contributing
Pull requests and stars are highly welcome.

For bugs and feature requests, please 



