import com.sun.net.httpserver.HttpServer;
import handlers.EncryptionHandler;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Main {
    public static void main(String[] args) {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
            // Set context to handle encryption requests
            server.createContext("/encrypt", new EncryptionHandler());
            server.setExecutor(null); // Use default executor
            server.start();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
