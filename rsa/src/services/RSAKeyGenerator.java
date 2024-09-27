package services;

import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.RSAPublicKeySpec;

public class RSAKeyGenerator {

    /**
     * Generates an RSA public key from modulus and exponent.
     * @param modulus the RSA modulus as a hexadecimal string
     * @param exponent the RSA exponent as a hexadecimal string
     * @return an RSAPublicKey
     */
    public static RSAPublicKey generatePublicKey(String modulus, String exponent) {
        try {
            BigInteger modulusBigInt = new BigInteger(modulus, 16);
            BigInteger exponentBigInt = new BigInteger(exponent, 16);
            return (RSAPublicKey) KeyFactory.getInstance("RSA").generatePublic(
                    new RSAPublicKeySpec(modulusBigInt, exponentBigInt)
            );
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            throw new RuntimeException("Invalid RSA key parameters", e);
        }
    }
}
