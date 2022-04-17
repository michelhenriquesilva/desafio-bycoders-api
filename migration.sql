CREATE TABLE public.transactions (
	id varchar NOT NULL,
	"type" int2 NOT NULL,
	"date" date NOT NULL,
	"time" time(0) NOT NULL,
	amount numeric(10,3) NOT NULL,
	"document" bpchar(11) NOT NULL,
	card bpchar(12) NULL,
	shop_owner varchar(20) NULL,
	shop varchar(20) NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (id)
);