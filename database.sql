
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--made a change for demo purposes


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" INT
    );


CREATE TABLE "painter_input" (
  "id" serial primary key, 
  "full_name" varchar,
  "address_1" varchar,
  "city" varchar,
  "state" varchar,
  "zip_code" int,
  "primary_phone" int,
  "email" varchar,
  "paint_id" int,
  "project_location_id" int, 
  "project_status_id" int,
  "project_size_id" int, 
  "language_id" int,  
  "estimate" int,
  "estimated_startdate" date,
  "notes" varchar, 
  "quoted" boolean,
  "contract_sent" boolean,
  "downpayment" boolean,
  "downpayment_amount" int,
  "enterdate" date,
  "user_id" int
);



CREATE TABLE "paint"(
"id" serial primary key,
"paint_color_name" varchar (255)
);


CREATE TABLE "project_location"(
"id" serial primary key,
"project_location_name" varchar (255)
);



CREATE TABLE "project_status"(
"id" serial primary key,
"project_status_name" varchar (255)
);



CREATE TABLE "project_size"(
"id" serial primary key,
"project_size_name" varchar (255)
);


CREATE TABLE "language_preference"(
"id" serial primary key,
"language_name" varchar (255)
);


INSERT INTO "paint" ("paint_color_name") VALUES ('eggshell blue');


INSERT INTO "project_location" ("project_location_name") VALUES ('exterior'); 
 

INSERT INTO "project_status" ("project_status_name") VALUES ('new');


INSERT INTO "project_size" ("project_size_name") VALUES ('large');


INSERT INTO "language_preference" ("language_name") VALUES ('spanish');


INSERT INTO "painter_input" ("full_name", "address_1", "city", "state", "zip_code", "primary_phone", "email" , "paint_id", "project_location_id", "project_status_id", "project_size_id", "language_id", "estimate", "estimated_startdate",  "notes", "quoted", "contract_sent", "downpayment", "downpayment_amount",  "user_id")VALUES ('Painter Prime', '123 Prime Ave', 'Msp', 'MN', '55331', '555555555', 'prime@prime.com', 1 , 1, 1, 1, 1, 10, '2022-07-26', 'painter notes', true, false, false, 1, 1 ); 


SELECT painter_input.id, full_name, address_1, city, state, zip_code, primary_phone, email, estimate, estimated_startdate, notes, quoted, contract_sent, downpayment, downpayment_amount, enterdate, paint_color_name, project_location_name, project_status_name, project_size_name, language_name FROM painter_input JOIN paint ON paint.id = paint_id JOIN project_location ON project_location.id = project_location_id JOIN project_status  ON project_status.id = project_status_id JOIN project_size ON project_size.id = project_size_id JOIN language_preference ON language_preference_id = language_preference.id ORDER BY painter_input.id ASC;