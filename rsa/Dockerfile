FROM openjdk:24

# Set the working directory
WORKDIR /rsa

# Copy the source code and manifest file to the container
COPY src/ ./src/
COPY manifest.txt ./

# Compile the Java code and build the JAR file using the manifest file
RUN javac -d ./build src/Main.java src/**/*.java  && \
    jar -cfm ./build/Main.jar manifest.txt -C build .

# Expose port 8080
EXPOSE 8080

# Specify the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "build/Main.jar"]
