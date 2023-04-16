#!/bin/bash
docker rm -f next_ssrf
docker build -t next_ssrf .
docker run --name=next_ssrf --rm -p1337:1337 -it next_ssrf
