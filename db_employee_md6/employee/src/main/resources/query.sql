create table employee (employee_id VARCHAR(20) not null, employee_address varchar(255), employee_date_start DATE, employee_image LONGTEXT, employee_name varchar(255), employee_note varchar(255), employee_phone varchar(255), flag BIT, position_id integer, users_username varchar(255), primary key (employee_id)) engine=InnoDB;
create table position (position_id integer not null auto_increment, position_name varchar(255), primary key (position_id)) engine=InnoDB;
create table roles (role_id integer not null auto_increment, role_name varchar(255), primary key (role_id)) engine=InnoDB;
create table user_role (user_role_id integer not null auto_increment, role_id integer, username varchar(255), primary key (user_role_id)) engine=InnoDB;
create table users (username varchar(255) not null, password varchar(255), primary key (username)) engine=InnoDB;
alter table employee add constraint FKbc8rdko9o9n1ri9bpdyxv3x7i foreign key (position_id) references position (position_id);
alter table employee add constraint FKm5ew6m4dykuysmbppfpgrlaia foreign key (users_username) references users (username);
alter table user_role add constraint FKt7e7djp752sqn6w22i6ocqy6q foreign key (role_id) references roles (role_id);
alter table user_role add constraint FK2svos04wv92op6gs17m9omli1 foreign key (username) references users (username)