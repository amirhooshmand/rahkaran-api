package utils;

public class EncryptionUtils {
    /**
     * Converts a byte array to a hexadecimal string.
     * @param byteArray the byte array to convert
     * @return the resulting hex string
     */
    public static String convertBytesToHexString(byte[] byteArray) {
        StringBuilder hexString = new StringBuilder();
        for (byte byteValue : byteArray) {
            hexString.append(String.format("%02X", byteValue));
        }
        return hexString.toString();
    }
}
