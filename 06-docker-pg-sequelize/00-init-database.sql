
create table users (
  id serial primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  password_hash text not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create unique index ix_users_emails on users(email);

insert into users (first_name, last_name, email, password_hash) values ('John', 'Doe', 'john@example.com', 'ASDFASDFA');
insert into users (first_name, last_name, email, password_hash) values ('Brian', 'Doe', 'brian@example.com', 'QWERQWER');
