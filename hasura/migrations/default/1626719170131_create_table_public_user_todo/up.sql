CREATE TABLE "public"."user_todo" (
  "user_id" integer NOT NULL,
  "todo_id" integer NOT NULL,
  PRIMARY KEY ("user_id","todo_id"),
  FOREIGN KEY ("todo_id") REFERENCES "public"."todo"("id") ON UPDATE cascade ON DELETE cascade,
  FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict
);
