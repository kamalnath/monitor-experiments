FROM docker.elastic.co/elasticsearch/elasticsearch:7.11.2
LABEL maintainer "Kamalnath <kamalnath.ng@gmail.com>"
RUN mkdir /scripts
COPY . /scripts
RUN ["chmod", "+x", "/scripts/runme.sh"]

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.11.2-linux-x86_64.tar.gz
RUN tar xzvf metricbeat-7.11.2-linux-x86_64.tar.gz
WORKDIR ./metricbeat-7.11.2-linux-x86_64
RUN  ./metricbeat modules enable elasticsearch
WORKDIR /scripts

EXPOSE 9200
