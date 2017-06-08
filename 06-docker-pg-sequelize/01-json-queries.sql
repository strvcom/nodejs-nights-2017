
-- all rows in a single JSON object
select json_agg(users.*) from users;

-- single JSON object with fields subset
select json_agg(values.*)
from (
  select sub.id, sub.first_name, sub.last_name
  from users as sub
) as values;

-- each row as a JSON object
select row_to_json(users.*) from users;

-- each row as a JSON object with fields subset
select row_to_json(values.*)
from (
  select sub.id, sub.first_name, sub.last_name
  from users as sub
) as values;

-- map of users
select json_build_object(id, row_to_json(users)) from users;

-- JSON array of users' ids
select array_to_json(array_agg(users.id)) from users;

-- List  all keys from JSON OBJECT
select (json_each(row_to_json(data.*))).key
from (select * from users limit 1) as data;
