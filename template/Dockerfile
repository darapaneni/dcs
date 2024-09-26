FROM ubuntu:20.04

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/




RUN apt-get update -y \
&& apt-get install -y software-properties-common \
&& add-apt-repository ppa:deadsnakes/ppa \
&& apt-get install openjdk-8-jdk -y \
&& apt-get install python3.11 -y \
&& apt-get install python3-pip -y \
&& export JAVA_HOME \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*





# Copy the current directory contents into the container at /app
COPY . /template

WORKDIR /template

RUN pip install --upgrade pip
# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the Flask port
EXPOSE 5000



EXPOSE 8080
# Run main.py when the container launches and Start a simple HTTP server on port 8080
CMD ["python3", "-m", "http.server", "8080"] && ["python3", "main.py"] 







