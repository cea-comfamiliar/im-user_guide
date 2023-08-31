---
sidebar_position: 6
---

## check_domain

Este trigger está asociado a la función **[check_domain](Funciones/#check_domain)**

```sql title="check_domain.sql"
CREATE TRIGGER check_domain
    BEFORE INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION check_domain();
```