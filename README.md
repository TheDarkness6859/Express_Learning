# postgres code:

### create schema if not exists practice; 

```bash 
CREATE TABLE IF NOT EXISTS author(
id uuid default gen_random_uuid() primary key,
name varchar(100) not null,
nacionalty varchar(20) not null
) 

CREATE TABLE IF NOT EXISTS book(
id uuid default gen_random_uuid() primary key,
author_id uuid references author(id) on delete cascade,
name varchar(40) unique not null,
release_date timestamp not null
)

CREATE TABLE IF NOT EXISTS loan(
id uuid default gen_random_uuid() primary key,
book_id uuid references book(id) on delete cascade,
user_name varchar(30) not null,
loan_date timestamp default current_timestamp not null
)
```

## function for get id of authors:

```bash
create or replace function get_author_id(author_name text)
returns uuid as $$
begin
return(select id from author where lower(name) = lower(author_name) limit 1);
end;
$$ language plpgsql;
```


## function for validate the dates:

```bash
create or replace function validate_date()
returns trigger as $$
begin

if(tg_table_name = 'book') then
if(new.realese_date > timestamp) then
raise exception 'The release date % of the book can´t be in the future', new.release_date;
end if;
end if;

if(tg_table_name = 'loan') then
if(new.loan_date > timestamp) then
raise exception 'The loan date % can´t be in the future', new.loan_date;
end if;
end if;

return new;
end;
$$ language plpgsql;
```


## trigger for book release date:

```bash
drop trigger if exists trg_validation_date on book;

create trigger trg_validation_date
before insert or update on book
for each row
execute function validate_date();
```

## trigger for loans date:

```bash
drop trigger if exists trg_validation_date on loan;

create trigger trg_validation_date
before insert or update on loan
for each row
execute function validate_date();
```

## Innit the project:

1. npm install.
2. Complete the .env file for connect with database.
3. Put in the console npm for execute the project