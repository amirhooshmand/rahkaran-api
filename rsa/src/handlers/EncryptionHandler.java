package handlers;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import services.EncryptionService;
import utils.QueryUtils;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Map;

public class EncryptionHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange httpExchange) throws IOException {
        // Parse query parameters
        Map<String, String> queryParams = QueryUtils.queryToMap(httpExchange.getRequestURI().getQuery());

        String password = queryParams.get("password");
        String modulus = queryParams.get("m");
        String exponent = queryParams.get("e");

        // Encrypt password using the EncryptionService
        String response = EncryptionService.encryptPassword(password, modulus, exponent);

        // Send response
        httpExchange.sendResponseHeaders(200, response.length());
        OutputStream outputStream = httpExchange.getResponseBody();
        outputStream.write(response.getBytes());
        outputStream.close();
    }
}
