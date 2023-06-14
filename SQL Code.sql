create database config_db;
use config_db;

drop database config_db;

create table department (
	dep_id int not null IDENTITY(1, 1),
	dep_name varchar(255) not null,
	constraint dept_pk primary key (dep_id)
);

insert into department values 
	('IT Section A'),
	('IT Section B'),
	('IT Section C');

select * from department;

create table designation (
	desig_id int not null IDENTITY(1, 1),
	desig_name varchar(255) not null,
	constraint desig_pk primary key (desig_id)
);

insert into designation (desig_name) values 
	('Super Admin'),
	('Admin'),
	('Partner');

select * from designation;

create table profile (
	pro_id int not null IDENTITY(1, 1),
	pro_first_name varchar(100) not null,
	pro_last_name varchar(100) not null,
	pro_email varchar(200) not null,
	pro_dept_id int not null,
	pro_desig_id int not null,
	pro_dob date not null,
	pro_gender varchar(20) not null,
	pro_mobile varchar(30) not null,
	pro_joined_date date not null,
	pro_updated_time datetime not null,
	constraint pro_dep_fk foreign key (pro_dept_id) references department(dep_id) on delete NO ACTION on update cascade,
	constraint pro_desig_fk foreign key (pro_desig_id) references designation(desig_id) on delete NO ACTION on update cascade,
	constraint pro_pk primary key (pro_id)
);

ALTER TABLE profile ADD PhotoLink VARCHAR(255);

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Vinuka', 'Navod', 'vinuka@gmail.com', 1, 1, '1998-12-29', 'Male', '7111236700', '2023-01-01', GETDATE());
insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Nethmi', 'Anjani', 'nethmi@gmail.com', 1, 2, '1999-05-20', 'Female', '7610206555', '2023-01-01', GETDATE()),
	('Pravindu', 'Bhashitha', 'pravindu@gmail.com', 1, 3, '1999-10-10', 'Male', '7111285420', '2023-01-01', GETDATE());

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Tharindu', 'Ruwanpathirana', 'tharindu@gmail.com', 1, 3, '2000-04-25', 'Male', '7155236852', '2023-01-01', GETDATE());

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('T', 'R', 't@gmail.com', 2, 3, '2000-05-25', 'FeMale', '7155236840', '2023-01-10', GETDATE());

UPDATE profile
SET PhotoLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg' where pro_id = 1;
UPDATE profile
SET PhotoLink = 'https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg' where pro_id = 3;
UPDATE profile
SET PhotoLink = 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg' where pro_id = 4;
UPDATE profile
SET PhotoLink = 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=' where pro_id = 2;
UPDATE profile
SET PhotoLink = 'https://womensagenda.com.au/wp-content/uploads/2021/03/yasmin_poole.png' where pro_id = 5;

UPDATE profile
SET PhotoLink = 'https://st2.depositphotos.com/3809847/5507/i/600/depositphotos_55071625-stock-photo-portrait-young-woman-smiling.jpg' where pro_id = 8;

UPDATE profile
SET PhotoLink = 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg' where pro_id = 13;
UPDATE profile
SET PhotoLink = 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg' where pro_id = 19;
UPDATE profile
SET PhotoLink = 'https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3103.jpg' where pro_id = 22;


select * from profile;


Create table login (
	id int not null identity(1, 1),
	username varchar(200) not null,
	password varchar(200) not null,
	pro_id int,
	desig_id int,
	constraint login_fk_pro_id foreign key(pro_id) references profile(pro_id) ON DELETE CASCADE,
	constraint login_fk_desig_id foreign key(desig_id) references designation(desig_id),
	constraint login_pk primary key (id)
);


insert into login (username, password, pro_id, desig_id) values 
	('vinuka@gmail.com', 'vinuka', 1, 1),
	('nethmi@gmail.com', 'nethmi', 2, 2),
	('pravindu@gmail.com', 'pravindu', 3, 3);

insert into login (username, password, pro_id, desig_id) values 
	('tharindu@gmail.com', 'tharindu', 4, 3);
insert into login (username, password, pro_id, desig_id) values 
	('pravindu@gmail.com', 'pravindu', 3, 3);

select * from login;

create table client_detail(
	client_id int not null identity(1, 1),
	first_name varchar(200) not null,
	last_name varchar(200) not null,
	nic varchar(50) not null,
	mobile_no varchar(20) not null,
	email varchar(200) not null,
	designation varchar(50),
	server_name varchar(100),
	partner_id int,
	constraint client_detail_fk_prt_id foreign key(partner_id) references profile(pro_id),
	constraint client_detail_pk primary key(client_id) 
);

ALTER TABLE client_detail ADD client_photo_link VARCHAR(255);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Amal', 'Perera', '784520856V', '0764578963', 'amal@gmail.com', 'General Manager', 'Server A', 3);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Amal', 'Perera', '784520856V', '0764578963', 'amal@gmail.com', 'General Manager', 'Server B', 3),
	('Kamal', 'De Perera', '884520410V', '0714522789', 'kamal@gmail.com', 'General Manager', 'Server C', 3),
	('Nimal', 'Wijethunga', '854520889V', '0704578666', 'nimal@gmail.com', 'General Manager', 'Server D', 3),
	('Chathura', 'Vinod', '654510878V', '0714544912', 'chathura@gmail.com', 'General Manager', 'Server E', 4),
	('Hasitha', 'Manohara', '805520899V', '0774288955', 'hasitha@gmail.com', 'General Manager', 'Server F', 4);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Kelum', 'Srinath', '965148239V', '0772546189', 'kelum@gmail.com', 'General Manager', 'Server B', 3),
	('Sampath', 'Kumara', '991258476V', '0712148790', 'sampath@gmail.com', 'General Manager', 'Server C', 3),
	('Sasika', 'Sankalana', '200014521426', '0704621789', 'sasika@gmail.com', 'General Manager', 'Server D', 3);

update client_detail set first_name = 'Jagath', last_name = 'Gallage', nic = '864512777V', mobile_no = '0714452122', email = 'jagath@gmail.com' where client_id = 2;

update client_detail set partner_id = 4 where client_id = 2;

UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/cheerful-bearded-man-charming-smile-260nw-2103954557.jpg' where client_id = 1;
UPDATE client_detail
SET client_photo_link = 'https://cpng.pikpng.com/pngl/s/540-5402180_guy-modified-dunder-mifflin-paper-company-businessguymodified-official.png' where client_id = 3;
UPDATE client_detail
SET client_photo_link = 'https://img.freepik.com/free-photo/proud-young-executive-ready-start_1139-303.jpg?w=2000' where client_id = 2;
UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/businessman-smiling-arms-crossed-on-260nw-2023023581.jpg' where client_id = 12;
UPDATE client_detail
SET client_photo_link = 'https://st3.depositphotos.com/2931363/14308/i/600/depositphotos_143087319-stock-photo-handsome-businessman-in-black-suit.jpg' where client_id = 5;
UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/successful-businessman-standing-on-light-260nw-1202416018.jpg' where client_id = 6;
UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/portrait-handsome-man-260nw-197019368.jpg' where client_id = 7;
UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/portrait-handsome-mature-man-wearing-260nw-1364728433.jpg' where client_id = 8;
UPDATE client_detail
SET client_photo_link = 'https://www.shutterstock.com/image-photo/smart-caucasian-mature-middleaged-freelancer-260nw-2175085685.jpg' where client_id = 9;

select count(*) from client_detail where partner_id = 4;
select * from client_detail;

2023/02/25 - Supervisor table
  
create table supervisor (
	id int not null IDENTITY(1, 1),
	pro_id int not null,
	sup_id int not null,
	constraint supervisor_fk_pro_id foreign key(pro_id) references profile(pro_id) ON DELETE CASCADE,
	constraint supervisor_fk_sup_id foreign key(sup_id) references profile(pro_id),
	constraint supervisor_pk primary key (id)
);

drop table supervisor;

insert into supervisor (pro_id, sup_id) values (2, 1), (3, 2), (4, 2); 
insert into supervisor (pro_id, sup_id) values (19, 2);
select * from supervisor;
select count(*) from supervisor where sup_id = 2;

create table project (
	id int not null IDENTITY(1, 1),
	pro_id int not null,
	p_name varchar(150),
	status int,
	progress int,
	created_at date DEFAULT GETDATE(), 
	constraint project_fk_pro_id foreign key(pro_id) references profile(pro_id),
	constraint project_pk primary key(id)
);

insert into project (pro_id, p_name, status, progress) values
	(3, 'A Company', 1, 50),
	(3, 'B Company', 0, 65);

insert into project (pro_id, p_name, status, progress) values
	(4, 'R Company', 1, 95),
	(4, 'T Company', 0, 40);

select * from project;
delete from project where id = 24;
drop table project;
select id, p_name, status, progress, created_at from project where pro_id = 4 and p_name like '%W%';
update project set p_name = 'a' where id = 31;

****************************************************************************
********************************************************************************
2023-06-11
Servers Table
create table server (
	id int not null IDENTITY(1, 1),
	server_name varchar(200) not null,
	ip_add varchar(100) not null,
	status varchar(10) not null,
	client_id int not null,
	performance int not null,
	constraint server_fk_client_id foreign key(client_id) references client_detail(client_id) ON DELETE CASCADE,
	constraint server_pk primary key (id)
);

select id, server_name, performance from server;

drop table server;

insert into server (server_name, ip_add, status, client_id, performance) values ('server A', '192.168.10.1', 'Up', 1, 35), ('server B', '192.168.10.2', 'Down', 2, 85), ('server C', '192.168.10.3', 'Up', 3, 60); 
insert into server (server_name, ip_add, status, client_id, performance) values ('server D', '192.168.10.4', 'Up', 5, 48), ('server E', '192.168.10.5', 'Down', 6, 75), ('server F', '192.168.10.6', 'Up', 5, 50); 
insert into server (server_name, ip_add, status, client_id, performance) values ('server G', '192.168.10.7', 'Up', 8, 18), ('server H', '192.168.10.8', 'Down', 7, 95), ('server I', '192.168.10.9', 'Up', 6, 70); 

select * from server;

SELECT s.id, s.server_name, s.ip_add, s.status, c.first_name, c.last_name
FROM server as s
LEFT JOIN client_detail as c
ON s.client_id = c.client_id
ORDER BY s.id;

*********************************************************************************
***********************************

create table errorLog (
	id int not null IDENTITY(1, 1),
	client_id int not null,
	file_name varchar(255),
	file_size int, 
	constraint errorLog_fk_pro_id foreign key(client_id) references client_detail(client_id) ON DELETE CASCADE,
	constraint errorLog_pk primary key(id)
);
select * from errorLog;

insert into errorLog (client_id, file_name, file_size) values (1, 'Error Log File 1', 5), 
(1, 'Error Log File 2', 6), 
(1, 'Error Log File 3', 6),
(1, 'Error Log File 4', 3),
(1, 'Error Log File 5', 7),
(1, 'Error Log File 6', 4); 
insert into errorLog (client_id, file_name, file_size) values (2, 'Error Log File 1', 5), 
(2, 'Error Log File 2', 6), 
(2, 'Error Log File 3', 6),
(2, 'Error Log File 4', 3),
(2, 'Error Log File 5', 7),
(2, 'Error Log File 6', 4);

create table service (
	id int not null IDENTITY(1, 1),
	client_id int not null,
	name varchar(255),
	description varchar(255),
	status varchar(40),
	startUpType varchar(40),
	logOnAs varchar(40), 
	constraint service_fk_pro_id foreign key(client_id) references client_detail(client_id) ON DELETE CASCADE,
	constraint service_pk primary key(id)
);
select * from service;
insert into service (client_id, name, description, status, startUpType, logOnAs) values 
(1, 'Service 1', 'descrip 1', 'Running', 'Manual', 'Local System'), 
(1, 'Service 2', 'descrip 2', 'Running', 'Automatic', 'Local System'), 
(1, 'Service 3', 'descrip 3', '', 'Manual', 'Local System'), 
(1, 'Service 4', 'descrip 4', '', 'Manual', 'Local System'), 
(1, 'Service 5', 'descrip 5', 'Running', 'Automatic', 'Local System'), 
(1, 'Service 6', 'descrip 6', 'Running', 'Manual', 'Local System');

insert into service (client_id, name, description, status, startUpType, logOnAs) values 
(2, 'Service 1', 'descrip 1', '', 'Automatic', 'Local System'), 
(2, 'Service 2', 'descrip 2', 'Running', 'Automatic', 'Local System'), 
(2, 'Service 3', 'descrip 3', '', 'Manual', 'Local System'), 
(2, 'Service 4', 'descrip 4', '', 'Manual', 'Local System'), 
(2, 'Service 5', 'descrip 5', 'Running', 'Automatic', 'Local System'), 
(2, 'Service 6', 'descrip 6', '', 'Manual', 'Local System');

create table reportHosting (
	id int not null IDENTITY(1, 1),
	client_id int not null,
	file_name varchar(255),
	file_size int, 
	constraint reportHosting_fk_pro_id foreign key(client_id) references client_detail(client_id) ON DELETE CASCADE,
	constraint reportHosting_pk primary key(id)
);
select * from reportHosting;
insert into reportHosting (client_id, file_name, file_size) values 
(1, 'Report File 1', 5), 
(1, 'Report File 2', 6), 
(1, 'Report File 3', 6),
(1, 'Report File 4', 3),
(1, 'Report File 5', 7),
(1, 'Report File 6', 4); 

insert into reportHosting (client_id, file_name, file_size) values 
(2, 'Report File 1', 3), 
(2, 'Report File 2', 2), 
(2, 'Report File 3', 8),
(2, 'Report File 4', 4),
(2, 'Report File 5', 2),
(2, 'Report File 6', 7); 

create table alert (
	id int not null IDENTITY(1, 1),
	client_id int not null,
	file_name varchar(255),
	file_size int, 
	constraint alert_fk_pro_id foreign key(client_id) references client_detail(client_id) ON DELETE CASCADE,
	constraint alert_pk primary key(id)
);
select * from alert;
insert into alert (client_id, file_name, file_size) values 
(1, 'Error Alert 1', 3), 
(1, 'Success Alert 2', 9), 
(1, 'Error', 6),
(1, 'Error', 3),
(1, 'Alert 5', 7),
(1, 'Alert 6', 2); 
insert into alert (client_id, file_name, file_size) values 
(2, 'Alert 1', 8), 
(2, 'Alert 2', 4), 
(2, 'Error', 6),
(2, 'Error', 5),
(2, 'Alert 5', 7),
(2, 'Alert 6', 2); 

*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************

