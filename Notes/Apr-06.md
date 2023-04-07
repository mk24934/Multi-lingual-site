# April 6th

- Docker ports: 0.0.0.0:8000->8000/tcp, :::8000->8000/tcp
    - `0.0.0.0:8000` is the 4th version of ip (ipv4), ipv6 is a newer and more complex system that can allow a much more influsive addressing system so every computer can have its own unique ip address, due to the finite limitations of ipv4 4 address numbers
    - because it is on 0.0.0.0, it is listening both locally and externally
    - `:::8000` is the ipv6 equivalent to the `0.0.0.0`, so the container will listen to both ipv4 and ipv6 addresses
    - the server is internally listening on port 8000 and it is exposed, maps the 8000 port on the server to the container
    - the computer has its own port, each container has its own port as well, so if map in this way e.g. 8000->8001 is saying the server will send any messages received on port 8000 to port 8001 of the container
    - with kubernetes can have lots of containers, can load balance 
- Webserver ports: 8000 or 8001 as well?
    - julia is listening on port 8000, so anybody that reaches out to that ip + port will be able to receive a response from it

localhost = 127.0.0.1, if bind the web service in promiscuous mode then on ip address 0.0.0.0, then not just members in the zip code can communicate with it, but anybody (even outside) can
analogy of zip code being ip address and house number being port
- protocols: `tcp`, `udp` sits below tcp, tcp uses udp to send packets back and forth to make a connection, as such it is a connection oriented protocol, while udp is connectionless
- ontop of tcp is `http`, data-gram protocol

- `lsof -i :8000` = list open files, -i = ip

- send command to server + have server evaluate using shell script with one line julia with -e, then return output as message
- todo: either server to run a shell command
- make a user on the container, and the user privliges are really low, can't do sudo or anything like that
- guardrails with validation of the code to prevent some functions to run like a system command