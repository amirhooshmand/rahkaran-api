package services;

import utils.EncryptionUtils;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.interfaces.RSAPublicKey;

public class EncryptionService {

    /**
     * Encrypts the given password using RSA encryption.
     * @param password the plaintext password to be encrypted
     * @param modulus the RSA modulus in hexadecimal
     * @param exponent the RSA exponent in hexadecimal
     * @return the encrypted password as a hex string
     */
    public static String encryptPassword(String password, String modulus, String exponent) {
        try {
            // Generate RSA public key
            RSAPublicKey publicKey = RSAKeyGenerator.generatePublicKey(modulus, exponent);
            Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
            cipher.init(Cipher.ENCRYPT_MODE, publicKey);

            // Encrypt and return as a hex string
            return EncryptionUtils.convertBytesToHexString(cipher.doFinal(password.getBytes(StandardCharsets.UTF_8)));
        } catch (Exception exception) {
            return "Error encrypting password: " + exception.getMessage();
        }
    }
}
