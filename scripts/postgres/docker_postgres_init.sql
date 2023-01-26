CREATE USER admin WITH PASSWORD '12369';

CREATE DATABASE pocrpg
    WITH 
    OWNER = admin 
    ENCODING = 'UTF8' 
    LC_COLLATE = 'en_US.utf8' 
    LC_CTYPE = 'en_US.utf8' 
    TABLESPACE = pg_default 
    CONNECTION LIMIT = -1;

GRANT ALL PRIVILEGES ON DATABASE pocrpg TO admin;

CREATE DATABASE keycloak
    WITH 
    OWNER = admin 
    ENCODING = 'UTF8' 
    LC_COLLATE = 'en_US.utf8' 
    LC_CTYPE = 'en_US.utf8' 
    TABLESPACE = pg_default 
    CONNECTION LIMIT = -1;

GRANT ALL PRIVILEGES ON DATABASE keycloak TO admin;