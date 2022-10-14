FROM jboss/keycloak:latest

COPY ./scripts/keycloak/keycloak-entrypoint.sh /opt/jboss/tools/keycloak-entrypoint.sh
# RUN chmod +x /opt/jboss/tools/keycloak-entrypoint.sh

ENTRYPOINT [ "/opt/jboss/tools/keycloak-entrypoint.sh" ]