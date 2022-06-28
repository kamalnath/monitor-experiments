FROM docker.elastic.co/beats/metricbeat:7.11.1
COPY metricbeat.yml /usr/share/metricbeat/metricbeat.yml
USER root
RUN chmod go-w /usr/share/metricbeat/metricbeat.yml
