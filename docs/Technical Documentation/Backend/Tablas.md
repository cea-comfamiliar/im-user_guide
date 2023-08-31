---
sidebar_position: 3
---

<!-- ## Tipos de variables

**uuid**: Identificador único universal. Número de 16 bytes (128 bits).  
**bigint (int8)**: Número entero sigando de 8 bytes (64 bits).  
**character varying (varchar)**: Cadena de caracteres de longitud variable.  
**timestamp with time zone (timestamptz)**: Fecha y hora, incluida la zona horaria -->


## transactions  

- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- user_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario al que se le está asignando los puntos
- activity_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id de la actividad que se está asignando
- points ([bigint](## "(int8): Número entero sigando de 8 bytes (64 bits). ")): puntos asignados
- comment (character varying): comentario 
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro  

## activities 
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- plan_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id del plan al que pertenece la actividad
- name ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): nombre de la actividad
- description ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): descripción de la actividad
- points ([bigint](## "(int8): Número entero sigando de 8 bytes (64 bits). ")): puntos máximos a otorgar
- coverage ([bigint](## "(int8): Número entero sigando de 8 bytes (64 bits). ")): cantidad de personas a las que se les puede asignar puntos
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro

## plans  
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- name ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): nombre del plan
- description ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): descripción del plan
- point_value ([bigint](## "(int8): Número entero sigando de 8 bytes (64 bits). ")): puntos totales a otorgar en el plan
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro

## roles
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- name ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): nombre del rol
- description ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): descripción del rol
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro

## users_activities
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- user_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id del usuario que será responsable de la actividad
- activity_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id de la actividad
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro

## users_roles
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- user_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id del usuario que tendrá el rol asignado
- rol_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del rol
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el registro

## transactions_redeem:
- id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): corresponde al id único de la transacción
- user_id ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario al que se le están redimiendo puntos
- points ([bigint](## "(int8): Número entero sigando de 8 bytes (64 bits). ")): puntos redimidos
- comment ([character varying](## "(varchar): Cadena de caracteres de longitud variable")): comentario 
- created_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se realizó  el registro
- updated_at ([timestamp with time zone](## "(timestamptz): Fecha y hora, incluida la zona horaria")): fecha y hora en la que se actualizó el registro
- created_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que creó el registro
- updated_by ([uuid](## "Identificador único universal. Número de 16 bytes (128 bits).")): id del usuario que actualizó el reg