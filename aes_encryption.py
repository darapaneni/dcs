from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

# 1. Key Derivation Function (to derive AES-256 key)
def derive_key(password: str) -> bytes:
    # Generate a random salt (16 bytes)
    salt = os.urandom(16)
    
    # Use PBKDF2HMAC to derive a key of exactly 32 bytes (256 bits)
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,  # AES-256 needs a 32-byte key
        salt=salt,
        iterations=100000
    )
    key = kdf.derive(password.encode())  # Derive the key from the password
    return key  # Return only the derived key (32 bytes)

# 2. Encrypt Data (AES-256 Encryption)
def encrypt_data(data: str, key: bytes) -> bytes:
    # Generate a random Initialization Vector (16 bytes)
    iv = os.urandom(16)  # IV should be 16 bytes for AES
    
    # Create AES cipher object in CFB mode
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    encryptor = cipher.encryptor()
    
    # Encrypt the data (convert string to bytes and encrypt)
    encrypted_data = encryptor.update(data.encode()) + encryptor.finalize()
    
    # Return the IV + encrypted data (IV is needed for decryption)
    return iv + encrypted_data

# 3. Decrypt Data (AES-256 Decryption)
def decrypt_data(encrypted_data: bytes, key: bytes) -> str:
    # Extract the IV from the first 16 bytes
    iv = encrypted_data[:16]
    
    # Create AES cipher object in CFB mode using the same key and IV
    cipher = Cipher(algorithms.AES(key), modes.CFB(iv))
    decryptor = cipher.decryptor()
    
    # Decrypt the data and return the original data (decoded back to string)
    decrypted_data = decryptor.update(encrypted_data[16:]) + decryptor.finalize()
    return decrypted_data.decode()

# 4. Main Function for Example Usage
if __name__ == "__main__":
    password = "mysecretpassword"  # Sample password to derive the key
    
    # Generate the AES key (32 bytes) from the password
    key = derive_key(password)
    
    data_to_encrypt = "This is some sensitive data."
    print(f"Original Data: {data_to_encrypt}")
    
    # Encrypt the data
    encrypted_data = encrypt_data(data_to_encrypt, key)
    print(f"Encrypted Data: {encrypted_data}")
    
    # Decrypt the data
    decrypted_data = decrypt_data(encrypted_data, key)
    print(f"Decrypted Data: {decrypted_data}")
