def caesar_cipher(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            if char.isupper():
                result += chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            else:
                result += chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
        else:
            result += char
    return result

def encrypt(text, shift):
    return caesar_cipher(text, shift)

def decrypt(text, shift):
    return caesar_cipher(text, -shift)

# User input
text = input("Enter the text: ")
shift = int(input("Enter the shift value: "))

# Encryption
encrypted_text = encrypt(text, shift)
print("Encrypted text:", encrypted_text)

# Decryption
decrypted_text = decrypt(encrypted_text, shift)
print("Decrypted text:", decrypted_text)