---
sidebar_position: 5
---

## Tabla transactions  

### INSERT
Solo los líderes de actividad pueden asignar puntos

```sql
((auth.uid() = ( SELECT ua.user_id
   FROM users_activities ua
  WHERE ((ua.activity_id = transactions.activity_id) 
  AND (ua.user_id = auth.uid())))) 
  AND (auth.uid() <> user_id) 
  AND (points <= (points_per_user(activity_id) - total_points_assigned(user_id, activity_id))) AND (points <> 0) 
  AND (points <= total_points_available(activity_id)))
```

### SELECT
GH Analysts, Activity Leaders o usuarios específicos pueden ejecutar SELECT.

```sql
((auth.uid() = user_id) OR ( SELECT is_hm_analyst(auth.uid()) AS is_hm_analyst) OR (auth.uid() = ( SELECT ua.user_id
   FROM users_activities ua
  WHERE ((ua.user_id = auth.uid()) AND (ua.activity_id = transactions.activity_id)))))

```

## Tabla activities  

### INSERT
GH Analysts puede INSERT.

```sql
is_hm_analyst(auth.uid())
```

### SELECT
GH Analysts, Activity Leaders o usuarios específicos pueden ejecutar SELECT.

```sql
((auth.uid() = ( SELECT ua.user_id
   FROM users_activities ua
  WHERE ((ua.activity_id = activities.id) AND (ua.user_id = auth.uid())))) OR ( SELECT is_hm_analyst(auth.uid()) AS is_hm_analyst) OR (auth.uid() = ( SELECT t.user_id
   FROM transactions t
  WHERE ((t.user_id = auth.uid()) AND (t.activity_id = activities.id))
 LIMIT 1)))
```

## Tabla plans

### INSERT
GH Analysts pueden INSERT.

```sql
( SELECT is_hm_analyst(auth.uid()) AS is_hm_analyst)
```

### SELECT
Usuarios autenticados pueden hacer SELECT.
```sql
true
```

## Tabla users_activities

### INSERT
GH Analysts pueden INSERT.

```sql
( SELECT is_hm_analyst(auth.uid()) AS is_hm_analyst)
```

### SELECT
GH Analysts, Activity Leaders o usuarios específicos pueden ejecutar SELECT.
```sql
((auth.uid() = user_id) OR ( SELECT is_hm_analyst(auth.uid()) AS is_hm_analyst))
```

## Tabla users_roles

### SELECT
Usuarios autenticados pueden hacer SELECT.
```sql
true
```