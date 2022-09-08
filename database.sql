
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" INT DEFAULT 1
    );

SELECT * FROM "user";

CREATE TABLE "paintproject_input" (
"id" serial primary key,
"client_type_id"	INT,
"client_firstlast_name"	VARCHAR	(255),
"decision_firstlast_name"	VARCHAR	(255),
"decision_emailaddress"	VARCHAR	(255),
"decision_phonenumber"	VARCHAR (14),
"project_address_1"	VARCHAR	(255),
"project_address_2"	VARCHAR	(255),
"project_address_city"	VARCHAR	(255),
"project_address_state"	VARCHAR	(255),
"project_address_zip"	INT,
"project_house_year"	INT,
"project_address_notes"	VARCHAR	(255),
"project_job_number"  SERIAL,
"project_propertytype_id"	INT,
"project_buildingtype_id"	INT,
"isproject_typeinterior"	BOOLEAN,
"isproject_typeexterior"	BOOLEAN,
"isproject_typecabinetry"	BOOLEAN,
"isproject_typespecialfeature" BOOLEAN,
"project_startdate"	DATE,
"project_complete_specificdate"	DATE,
"language_preference_id"	INT,
"user_id" 	INT,
"specialfeatureexterior_type_id"	INT,
"specialfeature_paintproduct"	VARCHAR	(255),
"isspecialfeaturestatus_needprimer"	BOOLEAN,
"isspecialfeaturestatus_patchedrepair"	BOOLEAN,
"isspecialfeaturestatus_extensivescraping"	BOOLEAN,
"specailfeature_notes" 	VARCHAR	(255),
"exteriorestimate_laborcost"	INT,
"exteriorestimate_materialcost" 	INT,
"exteriorestimate_totalcost" 	INT,
"isexteriorprep_powerwash"	BOOLEAN,
"isexteriorprep_scrape"	BOOLEAN,
"isexteriorprep_mildew"	BOOLEAN,
"isexteriorwarranty_oneyear"	BOOLEAN,
"isexteriorwarranty_threeyear"	BOOLEAN,
"isexteriorwarranty_fiveyear" 	BOOLEAN,
"photo_upload_id" INT);

alter sequence paintproject_input_project_job_number_seq restart with 00475;

SELECT * FROM "paintproject_input";


CREATE TABLE "client_type" (
  "id" serial primary key,
  "client_type_name" varchar(255) NOT NULL);

INSERT INTO "client_type" ("client_type_name") VALUES ('Homeowner');
INSERT INTO "client_type" ("client_type_name") VALUES ('Busines Owner');
INSERT INTO "client_type" ("client_type_name") VALUES ('Contractor/Developer');
INSERT INTO "client_type" ("client_type_name") VALUES ('Realtor/Designer');
INSERT INTO "client_type" ("client_type_name") VALUES ('Landlord/Property Owner');

SELECT * FROM "client_type";

CREATE TABLE "project_propertytype" (
  "id" serial primary key,
  "project_propertytype_name" varchar(255) NOT NULL);

INSERT INTO "project_propertytype" ("project_propertytype_name") VALUES ('Residential');
INSERT INTO "project_propertytype" ("project_propertytype_name") VALUES ('Commercial');
INSERT INTO "project_propertytype" ("project_propertytype_name") VALUES ('New construction');

SELECT * FROM "project_propertytype";


CREATE TABLE "project_buildingtype" (
  "id" serial primary key,
  "project_buildingtype_name" varchar(255) NOT NULL);

INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Single Family Home');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Commercial Building');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Apartment');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Condo');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Duplex');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Loft');
INSERT INTO "project_buildingtype" ("project_buildingtype_name") VALUES ('Multi-tenant');


SELECT * FROM "project_buildingtype";


CREATE TABLE "specialfeatureexterior_type" (
  "id" serial primary key,
  "specialfeatureexterior_type_name" varchar(255) NOT NULL);

INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Soffits');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Fascia');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Gate');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Gutters');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Columns');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Dormers');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Handrails');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Deck');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Porch');
INSERT INTO "specialfeatureexterior_type" ("specialfeatureexterior_type_name") VALUES ('Fence');


SELECT * FROM "specialfeatureexterior_type";



CREATE TABLE "photo_upload" (
	"id" SERIAL PRIMARY KEY,
	 "photo_upload_path" text NOT NULL,
	 "photo_upload_description" text NOT NULL);



INSERT INTO "photo_upload" ( "photo_upload_path", "photo_upload_description" ) VALUES ('photopathhere', 'photodescriptionhere');


SELECT * FROM "photo_upload";


CREATE TABLE "language_preference" (
  "id" serial primary key,
  "language_preference_name" varchar(255) NOT NULL);

INSERT INTO "language_preference" ("language_preference_name") VALUES ('English');
INSERT INTO "language_preference" ("language_preference_name") VALUES ('Spanish');

SELECT * FROM "language_preference";


INSERT INTO "paintproject_input" (
"client_type_id",
"client_firstlast_name",
"decision_firstlast_name",
"decision_emailaddress",
"decision_phonenumber",
"project_address_1",
"project_address_2",
"project_address_city",
"project_address_state",
"project_address_zip",
"project_house_year",
"project_address_notes",
"project_job_number" ,
"project_propertytype_id",
"project_buildingtype_id",
"isproject_typeinterior",
"isproject_typeexterior",
"isproject_typecabinetry",
"isproject_typespecialfeature",
"project_startdate",
"project_complete_specificdate",
"language_preference_id",
"user_id" ,
"specialfeatureexterior_type_id",
"specialfeature_paintproduct",
"isspecialfeaturestatus_needprimer",
"isspecialfeaturestatus_patchedrepair",
"isspecialfeaturestatus_extensivescraping",
"specialfeature_notes" ,
"exteriorestimate_laborcost",
"exteriorestimate_materialcost" ,
"exteriorestimate_totalcost" ,
"isexteriorprep_powerwash",
"isexteriorprep_scrape",
"isexteriorprep_mildew",
"isexteriorwarranty_oneyear",
"isexteriorwarranty_threeyear",
"isexteriorwarranty_fiveyear",
"photo_upload_id" )
VALUES
(1,
'Heather Osborne2',
'Heather Osborne2',
'theoz308@comcast.net',
'5555555555',
'2121 Prime Ave',
'Suite 210',
'Chaska',
'MN',
'55318',
'2006',
'end unit',
1,
1,
1,
false,
false,
false,
true,
'2022-07-26',
'2022-07-26',
1,
1,
1,
'brown',
true,
false,
false,
'needs help',
10,
10,
20,
true,
true,
true,
true,
false,
false,
1);


-- GET for most information in Paint Project DB

SELECT
paintproject_input.id,
client_type_name,
client_firstlast_name,
decision_firstlast_name,
decision_emailaddress,
decision_phonenumber,
project_address_1,
project_address_2,
project_address_city,
project_address_state,
project_address_zip,
project_house_year,
project_address_notes,
project_job_number ,
project_propertytype_name,
project_buildingtype_name,
isproject_typeinterior,
isproject_typeexterior,
isproject_typecabinetry,
isproject_typespecialfeature,
project_startdate,
project_complete_specificdate,
language_preference_name,
user_id ,
specialfeatureexterior_type_name,
specialfeature_paintproduct,
isspecialfeaturestatus_needprimer,
isspecialfeaturestatus_patchedrepair,
isspecialfeaturestatus_extensivescraping,
specailfeature_notes ,
exteriorestimate_laborcost,
exteriorestimate_materialcost,
exteriorestimate_totalcost,
isexteriorprep_powerwash,
isexteriorprep_scrape,
isexteriorprep_mildew,
isexteriorwarranty_oneyear,
isexteriorwarranty_threeyear,
isexteriorwarranty_fiveyear,
photo_upload_id
FROM
paintproject_input
JOIN	client_type	ON	client_type_id	=	client_type.id
JOIN	project_propertytype	ON	project_propertytype_id	=	project_propertytype.id
JOIN	project_buildingtype	ON	project_buildingtype_id	=	project_buildingtype.id
JOIN	language_preference	ON	language_preference_id	=	language_preference.id
JOIN	specialfeatureexterior_type	ON	specialfeatureexterior_type_id =	specialfeatureexterior_type.id
JOIN    photo_upload	ON	photo_upload_id	=	photo_upload.id;


-- GET information for Client component 
SELECT
paintproject_input.id,
client_type_name,
client_firstlast_name,
decision_firstlast_name,
decision_emailaddress,
decision_phonenumber,
project_address_1,
project_address_2,
project_address_city,
project_address_state,
project_address_zip,
project_house_year,
project_address_notes
FROM
paintproject_input
JOIN	client_type	ON	client_type_id	=	client_type.id;



-- GET information for Project component 
SELECT
paintproject_input.id,
project_job_number ,
project_propertytype_name,
project_buildingtype_name,
isproject_typeinterior,
isproject_typeexterior,
isproject_typecabinetry,
isproject_typespecialfeature,
project_startdate,
project_complete_specificdate
FROM
paintproject_input
JOIN	project_propertytype	ON	project_propertytype_id	=	project_propertytype.id
JOIN	project_buildingtype	ON	project_buildingtype_id	=	project_buildingtype.id;


-- GET information for Special Feature component 

SELECT
paintproject_input.id,
specialfeatureexterior_type_name,
specialfeature_paintproduct,
isspecialfeaturestatus_needprimer,
isspecialfeaturestatus_patchedrepair,
isspecialfeaturestatus_extensivescraping,
specailfeature_notes
FROM
paintproject_input
JOIN	specialfeatureexterior_type	ON	specialfeatureexterior_type_id =	specialfeatureexterior_type.id;


-- GET information for Estimate - exterior special feature

SELECT
paintproject_input.id,
exteriorestimate_laborcost,
exteriorestimate_materialcost,
exteriorestimate_totalcost
FROM
paintproject_input;



-- GET information for Exterior special feature scope of checkboxes 

SELECT
paintproject_input.id,
isexteriorprep_powerwash,
isexteriorprep_scrape,
isexteriorprep_mildew,
isexteriorwarranty_oneyear,
isexteriorwarranty_threeyear,
isexteriorwarranty_fiveyear
FROM
paintproject_input
JOIN	client_type	ON	client_type_id	=	client_type.id
JOIN	project_propertytype	ON	project_propertytype_id	=	project_propertytype.id
JOIN	project_buildingtype	ON	project_buildingtype_id	=	project_buildingtype.id
JOIN	language_preference	ON	language_preference_id	=	language_preference.id
JOIN	specialfeatureexterior_type	ON	specialfeatureexterior_type_id =	specialfeatureexterior_type.id;


-- 	GET  information for photo_upload 

SELECT
paintproject_input.id,
photo_upload_id,
photo_upload_path,
photo_upload_description
FROM paintproject_input
JOIN    photo_upload	ON	photo_upload_id	=	photo_upload.id






alter table photo_upload add column project_id int;
alter table photo_upload add column user_id int;
alter table photo_upload add constraint photo_upload_fk1 foreign key (“user_id”) references “user”(“id”);
alter table photo_upload add constraint photo_upload_fk0 foreign key (project_id) references paintproject_input(id);
SELECT paintproject_input.id,client_type_name,client_firstlast_name, decision_firstlast_name, decision_emailaddress, decision_phonenumber,project_address_1,project_address_2, project_address_city, project_address_state, project_address_zip, project_house_year, project_address_notes, project_propertytype_id, project_buildingtype_id, isproject_typeinterior, isproject_typecabinetry, isproject_typespecialfeature, project_startdate, project_complete_specificdate, specialfeatureexterior_type_id,
specialfeature_paintproduct,
isspecialfeaturestatus_needprimer,
isspecialfeaturestatus_patchedrepair,
isspecialfeaturestatus_extensivescraping,
specialfeature_notes,
exteriorestimate_laborcost,
exteriorestimate_materialcost,
exteriorestimate_totalcost,
isexteriorprep_powerwash,
isexteriorprep_scrape,
isexteriorprep_mildew,
isexteriorprep_scrape,
isexteriorprep_mildew,
isexteriorwarranty_oneyear,
isexteriorwarranty_threeyear,
isexteriorwarranty_fiveyear
FROM paintproject_input JOIN client_type ON client_type_id = client_type.id
JOIN project_propertytype ON	project_propertytype_id	=	project_propertytype.id
JOIN project_buildingtype	ON	project_buildingtype_id	=	project_buildingtype.id
ORDER BY paintproject_input.id DESC;		
UPDATE paintproject_input SET “client_type_id” = 1, “client_firstlast_name” = ‘Ozzy Osborne’, “decision_firstlast_name” = ‘Ozzy Osborne2’, “decision_emailaddress” = ‘2967’, “decision_phonenumber” = 555555,
    “project_address_1” = ‘email@comcast.net’, “project_address_2" = ‘2121 Prime Ave’, “project_address_city” = ‘Chaska’, “project_address_state” = ‘MN’, “project_address_zip” = ‘55318’, “project_house_year” =‘2006’, “project_address_notes” = ‘end unit’, “project_propertytype_id” = 1, “project_buildingtype_id” = 1, “isproject_typeinterior” = true, “isproject_typeexterior” = true,
    “isproject_typecabinetry” = true, “isproject_typespecialfeature” = true, “project_startdate” = ‘2022-07-26’, “project_complete_specificdate” = ‘2022-07-26’, “specialfeatureexterior_type_id” =1,
    “specialfeature_paintproduct” = ‘brown’, “isspecialfeaturestatus_needprimer” = true, “isspecialfeaturestatus_patchedrepair” = true, “isspecialfeaturestatus_extensivescraping” = true,
    “specialfeature_notes” = ‘need help’, “exteriorestimate_laborcost” = 10, “exteriorestimate_materialcost” = 10, “exteriorestimate_totalcost” = 20, “isexteriorprep_powerwash” = true,
    “isexteriorprep_scrape” = true, “isexteriorprep_mildew” = true, “isexteriorwarranty_oneyear” = true, “isexteriorwarranty_threeyear” = false, “isexteriorwarranty_fiveyear” = false, “user_id” = 1 WHERE paintproject_input.id = 128;
