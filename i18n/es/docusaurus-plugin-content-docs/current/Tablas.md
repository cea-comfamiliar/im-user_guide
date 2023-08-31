---
sidebar_position: 3
---

## Tipos de variables

**uuid**: Identificador único universal. Número de 16 bytes (128 bits).  
**bigint (int8)**: Número entero sigando de 8 bytes (64 bits).  
**character varying (varchar)**: Cadena de caracteres de longitud variable.  
**timestamp with time zone (timestamptz)**: Fecha y hora, incluida la zona horaria


## transactions

- id (uuid): corresponde al id único de la transacción
- user_id (uuid): id del usuario al que se le está asignando los puntos
- activity_id (uuid): id de la actividad que se está asignando
- points (bigint): puntos asignados
- comment (character varying): comentario
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## activities
- id (uuid): corresponde al id único de la transacción
- plan_id (uuid): corresponde al id del plan al que pertenece la actividad
- name (character varying): nombre de la actividad
- description (character varying): descripción de la actividad
- points (bigint): puntos máximos a otorgar
- coverage (bigint): cantidad de personas a las que se les puede asignar puntos
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## plans
- id (uuid): corresponde al id único de la transacción
- name (character varying): nombre del plan
- description (character varying): descripción del plan
- point_value (bigint): puntos totales a otorgar en el plan
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## roles
- id (uuid): corresponde al id único de la transacción
- name (character varying): nombre del rol
- description (character varying): descripción del rol
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## users_activities
- id (uuid): corresponde al id único de la transacción
- user_id (uuid): corresponde al id del usuario que será responsable de la actividad
- activity_id (uuid): id de la actividad
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## users_roles
- id (uuid): corresponde al id único de la transacción
- user_id (uuid): corresponde al id del usuario que tendrá el rol asignado
- rol_id (uuid): id del rol
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el registro

## transactions_redeem:
- id (uuid): corresponde al id único de la transacción
- user_id (uuid): id del usuario al que se le están redimiendo puntos
- points (integer): puntos redimidos
- comment (character varying): comentario
- created_at (timestamp with time zone): fecha y hora en la que se realizó  el registro
- updated_at (timestamp with time zone): fecha y hora en la que se actualizó el registro
- created_by (uuid): id del usuario que creó el registro
- updated_by (uuid): id del usuario que actualizó el reg