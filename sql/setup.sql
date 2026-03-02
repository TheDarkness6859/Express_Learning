create schema if not exists practice; 

create table if not exists author(
	id uuid default gen_random_uuid() primary key,
	name varchar(100) not null,
	nacionalty varchar(20) not null
)

create table if not exists book(
	id uuid default gen_random_uuid() primary key,
	author_id uuid references author(id) on delete cascade,
	name varchar(40) unique not null,
	release_date timestamp not null
)

create table if not exists loan(
	id uuid default gen_random_uuid() primary key,
	book_id uuid references book(id) on delete cascade,
	user_name varchar(30) not null,
	loan_date timestamp default current_timestamp not null
)

---function for get id of authors:

create or replace function get_author_id(author_name text)
returns uuid as $$
begin
	return(select id from author where lower(name) = lower(author_name) limit 1);
end;
$$ language plpgsql;

---

---function for validate the dates

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

---

---triggeer for book release date:

drop trigger if exists trg_validation_date on book;

create trigger trg_validation_date
before insert or update on book
for each row
execute function validate_date();

---

--- trigger for loans date:

drop trigger if exists trg_validation_date on loan;

create trigger if not exists trg_validation_date
before insert or update on loan
for each row
execute function validate_date();

---