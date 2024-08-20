# [Spanish] Renovate Apache Tomcat SSL

Translation is pending for the following cheatsheet, oops.

## Conceptos básicos

Webserver utiliza un **keystore** (`nombre-de-archivo.jks`, `Java KeyStore`). La configuracion para que webserver lea el keystore esta en el archivo `conf.xml` que está en la ruta de instalacion dentro de la carpeta conf, por defecto es:

```
C:\Program Files\Apache Software Foundation\Tomcat\conf
```

Para crear, editar, eliminar cosas de un keystore, se utiliza el comando `keytools`, deberia estar disponible si esta instalado el Java Development Kit. Los comandos *piden una password asociada al keystore* para ejecutarse.

Dentro del keystore, los certificados y las llaves privadas se listan con aliases.

Es importante instalar **dentro del keystore** (no sirve si estan instalados en el Sistema operativo) y **en orden** primero el certificado `root` de la entidad emisora de certificados de confianza, luego los certificados `intermedios` de la misma entidad y finalmente el certificado del sitio a asegurar con SSL. 

Link relevante de GoDaddy:

> [GoDaddy | Repositorio de certificados root e intermedios](https://certs.godaddy.com/repository)

Para que el keystore funcione con el webserver debe tener dentro de si lo siguiente (**en orden**):

- Certificado root de la entidad emisora
- Certificados intermedios (pueden venir como bundle, varios en uno)
- Certificado emitido para el sitio web
- Clave privada con el que se emitio el certificado para el sitio web

## Revisar contenido del keystore

Comando a continuacion muestra los alias contenidos dentro del keystore.

```cmd
# listar entradas del keystore
keytool -list -v -keystore <nombre-keystore>.jks 
```

Para consultar por un alias en particular dentro del keystore, agregar al final del comando separado por un espacio `-alias <alias-a-consultar>`.

## Proceso (desde cero) para obtener e instalar certificado

### 01 Generar keystore con clave privada

Comando genera un keystore. Pide ingresar dos veces una password que se asocia al keystore.

```cmd
keytool -genkeypair -alias <alias-sitio> -keyalg RSA -keystore <nombre-keystore>.jks -keysize 2048
```

### 02 Generar csr a partir del keystore
Comando genera una `Certificate Signing Request` (archivo .csr).

```cmd
keytool -certreq -alias <alias-sitio> -keystore <nombre-keystore>.jks -file <archivo>.csr
```

Archivo generado se entrega a la emisora de certificados, a partir del archivo se genera un zip con archivos, entre ellos, el certificado del sitio  (tipo .crt)


### 03 Importar los certificados de entidad emisora.

Importar al keystore los certificados root e intermedios.

Vienen en el zip que se descarga desde el sitio de la entidad emisora y/o se descargan desde el repositorio de la entidad emisora.

> [GoDaddy | Repositorio de certificados root e intermedios](https://certs.godaddy.com/repository)

```cmd
keytool -import -trustcacerts -alias root -file gdroot-g2.crt -keystore <nombre-keystore>.jks

keytool -import -trustcacerts -alias intermediate -file gd_bundle-g2-g1.crt -keystore <nombre-keystore>.jks
```

### 04 Importar el cert emitido para el sitio

```cmd
keytool -import -alias <alias-sitio> -file <nombre-certificado>.crt -keystore <nombre-keystore>.jks
```

### 05 Configurar Apache Tomcat

Dejar archivo keystore en ruta accesible para el tomcat (idealmente dentro de la carpeta `<ruta-instalacion-tomcat>/conf/keystore`)

**Archivo server.xml**

```xml
<Connector port="8082" 
    ...
    SSLEnabled="true"
    sslEnabledProtocols="TLSv1.2"
    scheme="https" 
    secure="true" 
    keystoreFile="<Ruta/al/archivo/keystore.jks>"
    keystorePass="<password-keystore>" 
    keystoreAlias="<alias-sitio>"
    sslProtocol="TLS"
    secretRequired="false"  />

```

Luego de editar archivo, reiniciar servicio de Apache Tomcat para cargar cambios. En caso de errores en el archivo keystore o de sintaxis en el `server.xml` el servicio no se levantará. Revisar logs de Apache Tomcat en caso de cualquier problema.
