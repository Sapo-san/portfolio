export const Postgres = `
# Postgres Cheatsheet

Note: All commands are meant for Ubuntu 20.02, OS that I was using at the time of writing this cheatsheet. 

This is a very short cheatsheet since I used Sequelize ORM to interact with the database and make queries instead of doing them myself. I used these to check if everything was correctly set up by Sequelize.

### Start Postgres server
\`\`\`bash
$ sudo service postgresql start
\`\`\`
If the service is not started, you will get this error when trying to access the databases.
\`\`\`
psql: could not connect to server: No such file or directory
    Is the server running locally and accepting
    connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
\`\`\`
---

### Enter Postgres frontend as postgres user
\`\`\`bash
$ sudo -u postgres psql
\`\`\`
to quit psql do
\`\`\`
postgres=# \\q
\`\`\`

---

### Create role in postgres
\`\`\`bash
$ sudo -u postgres createuser --interactive
\`\`\`

IMPORTANT: create linux user to enter psql
\`\`\`bash
$ sudo adduser <username>
$ sudo -u <username> psql -d <database name>
\`\`\`
- Note: If database name is not specified, psql will try to connect to database with the same name as username

---

### Create database
\`\`\`bash
$ sudo -u postgres createdb <database name>
\`\`\`

---

### Useful commands inside psql
\`\`\`
\\dt - see relations in DB
\`\`\`

Useful links: 
- [Digital Ocean | Cómo instalar y utilizar PostgreSQL en Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-es)
`