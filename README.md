Overview
This tool is designed to provide easy-to-use encryption and decryption capabilities for sensitive data. It uses strong cryptographic algorithms to ensure data security and integrity.

Features
Encryption: Protect your data with advanced encryption algorithms.
Decryption: Decrypt encrypted data securely when needed.
User-Friendly Interface: Simple command-line interface (CLI) for ease of use.
Strong Encryption Algorithms: Utilizes AES (Advanced Encryption Standard) for robust encryption.
Getting Started
To use this tool, follow these steps:

Installation:

Clone the repository from GitHub.
Install the necessary dependencies.
Usage:

Customize encryption settings such as key size and mode in the configuration file.
Examples
Encrypt a file:

markdown
Copy code
$ python encrypt.py sensitive_data.txt
Enter encryption key: ************
File encrypted successfully: sensitive_data.txt.enc
Decrypt a file:

markdown
Copy code
$ python decrypt.py sensitive_data.txt.enc
Enter decryption key: ************
File decrypted successfully: sensitive_data.txt
Configuration
Modify config.py to adjust encryption parameters like key size and mode.
Support
For any issues or questions, please contact our support team at support@criticalcyber.com.

License
This project is licensed under the MIT License - see the LICENSE file for details.
