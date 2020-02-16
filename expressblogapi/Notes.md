To force exit node app: sudo kill -9 `sudo lsof -t -i:5500`

So nodemon has a problem with WSL2, when it restarts or updates process becuase of change in file
it gives an error port in use. For some reason the port is not freeing when node process is killed.
So I have manually killed the process in nodemon.json
