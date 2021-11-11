-- TODO: create table CUSTOMERS with aforesaid attributes
-- with respective data types and primary key

create table CUSTOMERS(NAME varchar(255), ID varchar(255) primary key);

-- TODO: create table INVOICES with aforesaid attributes
-- with respective data types and foreign key

create table INVOICES(CUSTOMER_ID varchar(255), VALUE int, foreign key (CUSTOMER_ID) references CUSTOMERS(ID));

-- insert values into CUSTOMERS table

insert into CUSTOMERS(NAME, ID) values ('Julia', '9aa8af3678334f0e8f0ebcb22ca46107');
insert into CUSTOMERS(NAME, ID) values ('Samantha', '146434f56e564f0aa9d36333b3f20c70');
insert into CUSTOMERS(NAME, ID) values ('John', '17f6bc0447064a899e18635d737ea840');

-- insert values into INVOICES table

insert into INVOICES(CUSTOMER_ID, VALUE) values ('17f6bc0447064a899e18635d737ea840', 1000);
insert into INVOICES(CUSTOMER_ID, VALUE) values ('9aa8af3678334f0e8f0ebcb22ca46107', 500);
insert into INVOICES(CUSTOMER_ID, VALUE) values ('146434f56e564f0aa9d36333b3f20c70', 1000);

-- TODO: query that finds max VALUE in the INVOICES table and returns the NAME of every person
-- in the CUSTOMERS table that matches that specific value
-- with alphabetical order of A => z

-- select NAME
select customers.NAME 

-- from CUSTOMERS table with an alias name cus  
from CUSTOMERS as customers 

-- inner join INVOICES table to CUSTOMERS table with an alias name inv
inner join INVOICES as invoices

-- on condition to join both the tables using cus.ID = inv.CUSTOMER_ID
on customers.ID = invoices.CUSTOMER_ID

-- where condition to get the maximum value
-- select max(VALUE) from INVOICES table
where invoices.VALUE = (select max(value) from INVOICES) 

-- order by clause to order the NAME alphabetically a to z
order by customers.NAME asc;   