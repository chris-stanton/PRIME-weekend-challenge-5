-- SQL code to create table
CREATE TABLE employee_information (
    id SERIAL PRIMARY KEY,
    first_name character varying(80),
    last_name character varying(80),
    id_number integer,
    job_title character varying(100),
    annual_salary integer,
    active BOOLEAN DEFAULT true
);

-- SQL code to create table
CREATE TABLE employee_budget (
    id SERIAL PRIMARY KEY,
    month varchar(30),
    monthly_budget integer
);


-- hard coded data --
INSERT INTO employee_information (first_name, last_name, id_number, job_title, annual_salary)
VALUES ('Chris', 'Stanton', 123456, 'Boss', 123456, true),
('Stephanie', 'Stanton', 234567, 'Queen', 234567, true);
('Gavin', 'Stanton', 00134, 'Laborer', 1200, false);
