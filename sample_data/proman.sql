DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.users_id_seq;
CREATE TABLE users (
    id serial NOT NULL,
    username text,
    password text
);

DROP TABLE IF EXISTS public.boards;
DROP SEQUENCE IF EXISTS public.boards_id_seq;
CREATE TABLE boards (
    id serial NOT NULL,
    title text,
    user_id integer
);

DROP TABLE IF EXISTS public.cards;
DROP SEQUENCE IF EXISTS public.cards_id_seq;
CREATE TABLE cards (
    id serial NOT NULL,
    board_id integer,
    status_id integer,
    title text
);


ALTER TABLE ONLY users
    ADD CONSTRAINT pk_users_id PRIMARY KEY (id);

ALTER TABLE ONLY boards
    ADD CONSTRAINT pk_boards_id PRIMARY KEY (id);

ALTER TABLE ONLY cards
    ADD CONSTRAINT pk_cards_id PRIMARY KEY (id);


INSERT INTO users VALUES (0, 'kutya', '$2b$12$XVXxvNO9SK4Rbec/xO/Nd.cTvVb62xU/iR3IEm1UxxNy92QYytw1a');

SELECT pg_catalog.setval('users_id_seq', 1, true);


INSERT INTO boards VALUES (1000,'Kutya Tabla', 0);
INSERT INTO boards VALUES (1001,'Macska Tabla', 0);

SELECT pg_catalog.setval('boards_id_seq', 1002, true);

INSERT INTO cards VALUES (0, 1000, 1, 'Kutyaélet');
INSERT INTO cards VALUES (1, 1000, 2, 'Kutyahalál');

SELECT pg_catalog.setval('cards_id_seq', 2, true);
