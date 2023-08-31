---
sidebar_position: 4
---

## is_hm_analyst
Evalúa si el usuario es Analista de gestión humana

```sql title="is_hm_analyst.sql"
DECLARE
  var_user_id uuid;
BEGIN
  select
    ur.user_id
  into
    var_user_id
  from
    users_roles ur
  where
    ur.rol_id = '6fd80137-d58f-4062-9a9e-fc53e00c7d27'::uuid
    and ur.user_id = param_user_id;
  if var_user_id = param_user_id then
    return true;
  else
    return false;
  end IF;
END
```


## points_per_user

Evalua cuantos puntos se pueden asignar por usuario dependiendo de la actividad

```sql title="points_per_user.sql"
DECLARE
  var_points bigint;
BEGIN
  select
    (a.points / a.coverage)
  into
    var_points
  from
    activities a
  where
    a.id = param_activity_id;
  return var_points;
END
```


## total_points_assigned
Evalúa cuántos puntos se han asignado por actividad y por usuario

```sql title="total_points_assigned.sql"
DECLARE
  points bigint;
BEGIN
select
  sum(t.points)
into points
from
  transactions t
where
  t.user_id = param_user_id
  and t.activity_id = param_activity_id;
  return coalesce(points, 0);
END
```

## total_points_assigned_per_activity

Evalúa cuántos puntos se han asignado por actividad

```sql title="total_points_assigned_per_activity.sql"
DECLARE
  var_points bigint;
BEGIN
select
  sum(t.points)
into var_points
from
  transactions t
where
  t.activity_id = param_activity_id;
  return coalesce(var_points, 0);
END
```

## total_points_available

Evalúa cuántos puntos disponibles hay por actividad

```sql title="total_points_available.sql"
DECLARE
var_points bigint;
BEGIN
select
  a.points
into
  var_points
from
  activities a
where
  a.id = param_activity_id;
var_points := var_points - total_points_assigned_per_activity(param_activity_id);
return var_points;
END
```
