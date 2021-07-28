/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
};
	["JwtToken"]: AliasType<{
	token?:true,
		__typename?: true
}>;
	["LoginInput"]: {
	password:string,
	username:string
};
	/** mutation root */
["mutation_root"]: AliasType<{
delete_todo?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["todo_bool_exp"]},ValueTypes["todo_mutation_response"]],
delete_todo_by_pk?: [{	id:number},ValueTypes["todo"]],
delete_user?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
delete_user_by_pk?: [{	id:number},ValueTypes["user"]],
delete_user_todo?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_mutation_response"]],
delete_user_todo_by_pk?: [{	todo_id:number,	user_id:number},ValueTypes["user_todo"]],
insert_todo?: [{	/** the rows to be inserted */
	objects:ValueTypes["todo_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["todo_on_conflict"]},ValueTypes["todo_mutation_response"]],
insert_todo_one?: [{	/** the row to be inserted */
	object:ValueTypes["todo_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["todo_on_conflict"]},ValueTypes["todo"]],
insert_user?: [{	/** the rows to be inserted */
	objects:ValueTypes["user_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"]},ValueTypes["user_mutation_response"]],
insert_user_one?: [{	/** the row to be inserted */
	object:ValueTypes["user_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"]},ValueTypes["user"]],
insert_user_todo?: [{	/** the rows to be inserted */
	objects:ValueTypes["user_todo_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["user_todo_on_conflict"]},ValueTypes["user_todo_mutation_response"]],
insert_user_todo_one?: [{	/** the row to be inserted */
	object:ValueTypes["user_todo_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["user_todo_on_conflict"]},ValueTypes["user_todo"]],
signup?: [{	params:ValueTypes["SignupInput"]},ValueTypes["JwtToken"]],
update_todo?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["todo_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["todo_set_input"],	/** filter the rows which have to be updated */
	where:ValueTypes["todo_bool_exp"]},ValueTypes["todo_mutation_response"]],
update_todo_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["todo_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["todo_set_input"],	pk_columns:ValueTypes["todo_pk_columns_input"]},ValueTypes["todo"]],
update_user?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_set_input"],	/** filter the rows which have to be updated */
	where:ValueTypes["user_bool_exp"]},ValueTypes["user_mutation_response"]],
update_user_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_set_input"],	pk_columns:ValueTypes["user_pk_columns_input"]},ValueTypes["user"]],
update_user_todo?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_todo_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_todo_set_input"],	/** filter the rows which have to be updated */
	where:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_mutation_response"]],
update_user_todo_by_pk?: [{	/** increments the numeric columns with given value of the filtered values */
	_inc?:ValueTypes["user_todo_inc_input"],	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_todo_set_input"],	pk_columns:ValueTypes["user_todo_pk_columns_input"]},ValueTypes["user_todo"]],
		__typename?: true
}>;
	/** column ordering options */
["order_by"]:order_by;
	["query_root"]: AliasType<{
login?: [{	params:ValueTypes["LoginInput"]},ValueTypes["JwtToken"]],
todo?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todo_bool_exp"]},ValueTypes["todo"]],
todo_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todo_bool_exp"]},ValueTypes["todo_aggregate"]],
todo_by_pk?: [{	id:number},ValueTypes["todo"]],
user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"]},ValueTypes["user"]],
user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"]},ValueTypes["user_aggregate"]],
user_by_pk?: [{	id:number},ValueTypes["user"]],
user_todo?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo"]],
user_todo_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_aggregate"]],
user_todo_by_pk?: [{	todo_id:number,	user_id:number},ValueTypes["user_todo"]],
		__typename?: true
}>;
	["SignupInput"]: {
	password:string,
	username:string
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string,
	_is_null?:boolean,
	/** does the column match the given pattern */
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string,
	/** does the column NOT match the given pattern */
	_nlike?:string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string,
	/** does the column match the given SQL regular expression */
	_similar?:string
};
	["subscription_root"]: AliasType<{
todo?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todo_bool_exp"]},ValueTypes["todo"]],
todo_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["todo_bool_exp"]},ValueTypes["todo_aggregate"]],
todo_by_pk?: [{	id:number},ValueTypes["todo"]],
user?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"]},ValueTypes["user"]],
user_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_bool_exp"]},ValueTypes["user_aggregate"]],
user_by_pk?: [{	id:number},ValueTypes["user"]],
user_todo?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo"]],
user_todo_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_aggregate"]],
user_todo_by_pk?: [{	todo_id:number,	user_id:number},ValueTypes["user_todo"]],
		__typename?: true
}>;
	/** columns and relationships of "todo" */
["todo"]: AliasType<{
	description?:true,
	id?:true,
	is_completed?:true,
user_todos?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo"]],
user_todos_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_aggregate"]],
		__typename?: true
}>;
	/** aggregated selection of "todo" */
["todo_aggregate"]: AliasType<{
	aggregate?:ValueTypes["todo_aggregate_fields"],
	nodes?:ValueTypes["todo"],
		__typename?: true
}>;
	/** aggregate fields of "todo" */
["todo_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["todo_avg_fields"],
count?: [{	columns?:ValueTypes["todo_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["todo_max_fields"],
	min?:ValueTypes["todo_min_fields"],
	stddev?:ValueTypes["todo_stddev_fields"],
	stddev_pop?:ValueTypes["todo_stddev_pop_fields"],
	stddev_samp?:ValueTypes["todo_stddev_samp_fields"],
	sum?:ValueTypes["todo_sum_fields"],
	var_pop?:ValueTypes["todo_var_pop_fields"],
	var_samp?:ValueTypes["todo_var_samp_fields"],
	variance?:ValueTypes["todo_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["todo_avg_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
["todo_bool_exp"]: {
	_and?:ValueTypes["todo_bool_exp"][],
	_not?:ValueTypes["todo_bool_exp"],
	_or?:ValueTypes["todo_bool_exp"][],
	description?:ValueTypes["String_comparison_exp"],
	id?:ValueTypes["Int_comparison_exp"],
	is_completed?:ValueTypes["Boolean_comparison_exp"],
	user_todos?:ValueTypes["user_todo_bool_exp"]
};
	/** unique or primary key constraints on table "todo" */
["todo_constraint"]:todo_constraint;
	/** input type for incrementing numeric columns in table "todo" */
["todo_inc_input"]: {
	id?:number
};
	/** input type for inserting data into table "todo" */
["todo_insert_input"]: {
	description?:string,
	id?:number,
	is_completed?:boolean,
	user_todos?:ValueTypes["user_todo_arr_rel_insert_input"]
};
	/** aggregate max on columns */
["todo_max_fields"]: AliasType<{
	description?:true,
	id?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["todo_min_fields"]: AliasType<{
	description?:true,
	id?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "todo" */
["todo_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["todo"],
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "todo" */
["todo_obj_rel_insert_input"]: {
	data:ValueTypes["todo_insert_input"],
	/** on conflict condition */
	on_conflict?:ValueTypes["todo_on_conflict"]
};
	/** on conflict condition type for table "todo" */
["todo_on_conflict"]: {
	constraint:ValueTypes["todo_constraint"],
	update_columns:ValueTypes["todo_update_column"][],
	where?:ValueTypes["todo_bool_exp"]
};
	/** Ordering options when selecting data from "todo". */
["todo_order_by"]: {
	description?:ValueTypes["order_by"],
	id?:ValueTypes["order_by"],
	is_completed?:ValueTypes["order_by"],
	user_todos_aggregate?:ValueTypes["user_todo_aggregate_order_by"]
};
	/** primary key columns input for table: todo */
["todo_pk_columns_input"]: {
	id:number
};
	/** select columns of table "todo" */
["todo_select_column"]:todo_select_column;
	/** input type for updating data in table "todo" */
["todo_set_input"]: {
	description?:string,
	id?:number,
	is_completed?:boolean
};
	/** aggregate stddev on columns */
["todo_stddev_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["todo_stddev_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["todo_stddev_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["todo_sum_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** update columns of table "todo" */
["todo_update_column"]:todo_update_column;
	/** aggregate var_pop on columns */
["todo_var_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["todo_var_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["todo_variance_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** columns and relationships of "user" */
["user"]: AliasType<{
	id?:true,
	password?:true,
user_todos?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo"]],
user_todos_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_todo_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_todo_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_todo_bool_exp"]},ValueTypes["user_todo_aggregate"]],
	username?:true,
		__typename?: true
}>;
	/** aggregated selection of "user" */
["user_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_aggregate_fields"],
	nodes?:ValueTypes["user"],
		__typename?: true
}>;
	/** aggregate fields of "user" */
["user_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["user_avg_fields"],
count?: [{	columns?:ValueTypes["user_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["user_max_fields"],
	min?:ValueTypes["user_min_fields"],
	stddev?:ValueTypes["user_stddev_fields"],
	stddev_pop?:ValueTypes["user_stddev_pop_fields"],
	stddev_samp?:ValueTypes["user_stddev_samp_fields"],
	sum?:ValueTypes["user_sum_fields"],
	var_pop?:ValueTypes["user_var_pop_fields"],
	var_samp?:ValueTypes["user_var_samp_fields"],
	variance?:ValueTypes["user_variance_fields"],
		__typename?: true
}>;
	/** aggregate avg on columns */
["user_avg_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
	_and?:ValueTypes["user_bool_exp"][],
	_not?:ValueTypes["user_bool_exp"],
	_or?:ValueTypes["user_bool_exp"][],
	id?:ValueTypes["Int_comparison_exp"],
	password?:ValueTypes["String_comparison_exp"],
	user_todos?:ValueTypes["user_todo_bool_exp"],
	username?:ValueTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]:user_constraint;
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: {
	id?:number
};
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
	id?:number,
	password?:string,
	user_todos?:ValueTypes["user_todo_arr_rel_insert_input"],
	username?:string
};
	/** aggregate max on columns */
["user_max_fields"]: AliasType<{
	id?:true,
	password?:true,
	username?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["user_min_fields"]: AliasType<{
	id?:true,
	password?:true,
	username?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "user" */
["user_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user"],
		__typename?: true
}>;
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
	data:ValueTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?:ValueTypes["user_on_conflict"]
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
	constraint:ValueTypes["user_constraint"],
	update_columns:ValueTypes["user_update_column"][],
	where?:ValueTypes["user_bool_exp"]
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
	id?:ValueTypes["order_by"],
	password?:ValueTypes["order_by"],
	user_todos_aggregate?:ValueTypes["user_todo_aggregate_order_by"],
	username?:ValueTypes["order_by"]
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
	id:number
};
	/** select columns of table "user" */
["user_select_column"]:user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
	id?:number,
	password?:string,
	username?:string
};
	/** aggregate stddev on columns */
["user_stddev_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate sum on columns */
["user_sum_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** columns and relationships of "user_todo" */
["user_todo"]: AliasType<{
	/** An object relationship */
	todo?:ValueTypes["todo"],
	todo_id?:true,
	/** An object relationship */
	user?:ValueTypes["user"],
	user_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "user_todo" */
["user_todo_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_todo_aggregate_fields"],
	nodes?:ValueTypes["user_todo"],
		__typename?: true
}>;
	/** aggregate fields of "user_todo" */
["user_todo_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["user_todo_avg_fields"],
count?: [{	columns?:ValueTypes["user_todo_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["user_todo_max_fields"],
	min?:ValueTypes["user_todo_min_fields"],
	stddev?:ValueTypes["user_todo_stddev_fields"],
	stddev_pop?:ValueTypes["user_todo_stddev_pop_fields"],
	stddev_samp?:ValueTypes["user_todo_stddev_samp_fields"],
	sum?:ValueTypes["user_todo_sum_fields"],
	var_pop?:ValueTypes["user_todo_var_pop_fields"],
	var_samp?:ValueTypes["user_todo_var_samp_fields"],
	variance?:ValueTypes["user_todo_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "user_todo" */
["user_todo_aggregate_order_by"]: {
	avg?:ValueTypes["user_todo_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["user_todo_max_order_by"],
	min?:ValueTypes["user_todo_min_order_by"],
	stddev?:ValueTypes["user_todo_stddev_order_by"],
	stddev_pop?:ValueTypes["user_todo_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["user_todo_stddev_samp_order_by"],
	sum?:ValueTypes["user_todo_sum_order_by"],
	var_pop?:ValueTypes["user_todo_var_pop_order_by"],
	var_samp?:ValueTypes["user_todo_var_samp_order_by"],
	variance?:ValueTypes["user_todo_variance_order_by"]
};
	/** input type for inserting array relation for remote table "user_todo" */
["user_todo_arr_rel_insert_input"]: {
	data:ValueTypes["user_todo_insert_input"][],
	/** on conflict condition */
	on_conflict?:ValueTypes["user_todo_on_conflict"]
};
	/** aggregate avg on columns */
["user_todo_avg_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "user_todo" */
["user_todo_avg_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "user_todo". All fields are combined with a logical 'AND'. */
["user_todo_bool_exp"]: {
	_and?:ValueTypes["user_todo_bool_exp"][],
	_not?:ValueTypes["user_todo_bool_exp"],
	_or?:ValueTypes["user_todo_bool_exp"][],
	todo?:ValueTypes["todo_bool_exp"],
	todo_id?:ValueTypes["Int_comparison_exp"],
	user?:ValueTypes["user_bool_exp"],
	user_id?:ValueTypes["Int_comparison_exp"]
};
	/** unique or primary key constraints on table "user_todo" */
["user_todo_constraint"]:user_todo_constraint;
	/** input type for incrementing numeric columns in table "user_todo" */
["user_todo_inc_input"]: {
	todo_id?:number,
	user_id?:number
};
	/** input type for inserting data into table "user_todo" */
["user_todo_insert_input"]: {
	todo?:ValueTypes["todo_obj_rel_insert_input"],
	todo_id?:number,
	user?:ValueTypes["user_obj_rel_insert_input"],
	user_id?:number
};
	/** aggregate max on columns */
["user_todo_max_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "user_todo" */
["user_todo_max_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["user_todo_min_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "user_todo" */
["user_todo_min_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** response of any mutation on the table "user_todo" */
["user_todo_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user_todo"],
		__typename?: true
}>;
	/** on conflict condition type for table "user_todo" */
["user_todo_on_conflict"]: {
	constraint:ValueTypes["user_todo_constraint"],
	update_columns:ValueTypes["user_todo_update_column"][],
	where?:ValueTypes["user_todo_bool_exp"]
};
	/** Ordering options when selecting data from "user_todo". */
["user_todo_order_by"]: {
	todo?:ValueTypes["todo_order_by"],
	todo_id?:ValueTypes["order_by"],
	user?:ValueTypes["user_order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** primary key columns input for table: user_todo */
["user_todo_pk_columns_input"]: {
	todo_id:number,
	user_id:number
};
	/** select columns of table "user_todo" */
["user_todo_select_column"]:user_todo_select_column;
	/** input type for updating data in table "user_todo" */
["user_todo_set_input"]: {
	todo_id?:number,
	user_id?:number
};
	/** aggregate stddev on columns */
["user_todo_stddev_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "user_todo" */
["user_todo_stddev_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["user_todo_stddev_pop_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "user_todo" */
["user_todo_stddev_pop_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["user_todo_stddev_samp_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "user_todo" */
["user_todo_stddev_samp_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["user_todo_sum_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "user_todo" */
["user_todo_sum_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** update columns of table "user_todo" */
["user_todo_update_column"]:user_todo_update_column;
	/** aggregate var_pop on columns */
["user_todo_var_pop_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "user_todo" */
["user_todo_var_pop_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["user_todo_var_samp_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "user_todo" */
["user_todo_var_samp_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["user_todo_variance_fields"]: AliasType<{
	todo_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "user_todo" */
["user_todo_variance_order_by"]: {
	todo_id?:ValueTypes["order_by"],
	user_id?:ValueTypes["order_by"]
};
	/** update columns of table "user" */
["user_update_column"]:user_update_column;
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>;
	/** aggregate variance on columns */
["user_variance_fields"]: AliasType<{
	id?:true,
		__typename?: true
}>
  }

export type PartialObjects = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
},
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
	_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
},
	["JwtToken"]: {
		__typename?: "JwtToken";
			token?:string
	},
	["LoginInput"]: {
	password:string,
	username:string
},
	/** mutation root */
["mutation_root"]: {
		__typename?: "mutation_root";
			/** delete data from the table: "todo" */
	delete_todo?:PartialObjects["todo_mutation_response"],
			/** delete single row from the table: "todo" */
	delete_todo_by_pk?:PartialObjects["todo"],
			/** delete data from the table: "user" */
	delete_user?:PartialObjects["user_mutation_response"],
			/** delete single row from the table: "user" */
	delete_user_by_pk?:PartialObjects["user"],
			/** delete data from the table: "user_todo" */
	delete_user_todo?:PartialObjects["user_todo_mutation_response"],
			/** delete single row from the table: "user_todo" */
	delete_user_todo_by_pk?:PartialObjects["user_todo"],
			/** insert data into the table: "todo" */
	insert_todo?:PartialObjects["todo_mutation_response"],
			/** insert a single row into the table: "todo" */
	insert_todo_one?:PartialObjects["todo"],
			/** insert data into the table: "user" */
	insert_user?:PartialObjects["user_mutation_response"],
			/** insert a single row into the table: "user" */
	insert_user_one?:PartialObjects["user"],
			/** insert data into the table: "user_todo" */
	insert_user_todo?:PartialObjects["user_todo_mutation_response"],
			/** insert a single row into the table: "user_todo" */
	insert_user_todo_one?:PartialObjects["user_todo"],
			signup?:PartialObjects["JwtToken"],
			/** update data of the table: "todo" */
	update_todo?:PartialObjects["todo_mutation_response"],
			/** update single row of the table: "todo" */
	update_todo_by_pk?:PartialObjects["todo"],
			/** update data of the table: "user" */
	update_user?:PartialObjects["user_mutation_response"],
			/** update single row of the table: "user" */
	update_user_by_pk?:PartialObjects["user"],
			/** update data of the table: "user_todo" */
	update_user_todo?:PartialObjects["user_todo_mutation_response"],
			/** update single row of the table: "user_todo" */
	update_user_todo_by_pk?:PartialObjects["user_todo"]
	},
	/** column ordering options */
["order_by"]:order_by,
	["query_root"]: {
		__typename?: "query_root";
			login?:PartialObjects["JwtToken"],
			/** fetch data from the table: "todo" */
	todo?:PartialObjects["todo"][],
			/** fetch aggregated fields from the table: "todo" */
	todo_aggregate?:PartialObjects["todo_aggregate"],
			/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:PartialObjects["todo"],
			/** fetch data from the table: "user" */
	user?:PartialObjects["user"][],
			/** fetch aggregated fields from the table: "user" */
	user_aggregate?:PartialObjects["user_aggregate"],
			/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:PartialObjects["user"],
			/** fetch data from the table: "user_todo" */
	user_todo?:PartialObjects["user_todo"][],
			/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate?:PartialObjects["user_todo_aggregate"],
			/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:PartialObjects["user_todo"]
	},
	["SignupInput"]: {
	password:string,
	username:string
},
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string,
	_is_null?:boolean,
	/** does the column match the given pattern */
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string,
	/** does the column NOT match the given pattern */
	_nlike?:string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string,
	/** does the column match the given SQL regular expression */
	_similar?:string
},
	["subscription_root"]: {
		__typename?: "subscription_root";
			/** fetch data from the table: "todo" */
	todo?:PartialObjects["todo"][],
			/** fetch aggregated fields from the table: "todo" */
	todo_aggregate?:PartialObjects["todo_aggregate"],
			/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:PartialObjects["todo"],
			/** fetch data from the table: "user" */
	user?:PartialObjects["user"][],
			/** fetch aggregated fields from the table: "user" */
	user_aggregate?:PartialObjects["user_aggregate"],
			/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:PartialObjects["user"],
			/** fetch data from the table: "user_todo" */
	user_todo?:PartialObjects["user_todo"][],
			/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate?:PartialObjects["user_todo_aggregate"],
			/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:PartialObjects["user_todo"]
	},
	/** columns and relationships of "todo" */
["todo"]: {
		__typename?: "todo";
			description?:string,
			id?:number,
			is_completed?:boolean,
			/** An array relationship */
	user_todos?:PartialObjects["user_todo"][],
			/** An aggregate relationship */
	user_todos_aggregate?:PartialObjects["user_todo_aggregate"]
	},
	/** aggregated selection of "todo" */
["todo_aggregate"]: {
		__typename?: "todo_aggregate";
			aggregate?:PartialObjects["todo_aggregate_fields"],
			nodes?:PartialObjects["todo"][]
	},
	/** aggregate fields of "todo" */
["todo_aggregate_fields"]: {
		__typename?: "todo_aggregate_fields";
			avg?:PartialObjects["todo_avg_fields"],
			count?:number,
			max?:PartialObjects["todo_max_fields"],
			min?:PartialObjects["todo_min_fields"],
			stddev?:PartialObjects["todo_stddev_fields"],
			stddev_pop?:PartialObjects["todo_stddev_pop_fields"],
			stddev_samp?:PartialObjects["todo_stddev_samp_fields"],
			sum?:PartialObjects["todo_sum_fields"],
			var_pop?:PartialObjects["todo_var_pop_fields"],
			var_samp?:PartialObjects["todo_var_samp_fields"],
			variance?:PartialObjects["todo_variance_fields"]
	},
	/** aggregate avg on columns */
["todo_avg_fields"]: {
		__typename?: "todo_avg_fields";
			id?:number
	},
	/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
["todo_bool_exp"]: {
	_and?:PartialObjects["todo_bool_exp"][],
	_not?:PartialObjects["todo_bool_exp"],
	_or?:PartialObjects["todo_bool_exp"][],
	description?:PartialObjects["String_comparison_exp"],
	id?:PartialObjects["Int_comparison_exp"],
	is_completed?:PartialObjects["Boolean_comparison_exp"],
	user_todos?:PartialObjects["user_todo_bool_exp"]
},
	/** unique or primary key constraints on table "todo" */
["todo_constraint"]:todo_constraint,
	/** input type for incrementing numeric columns in table "todo" */
["todo_inc_input"]: {
	id?:number
},
	/** input type for inserting data into table "todo" */
["todo_insert_input"]: {
	description?:string,
	id?:number,
	is_completed?:boolean,
	user_todos?:PartialObjects["user_todo_arr_rel_insert_input"]
},
	/** aggregate max on columns */
["todo_max_fields"]: {
		__typename?: "todo_max_fields";
			description?:string,
			id?:number
	},
	/** aggregate min on columns */
["todo_min_fields"]: {
		__typename?: "todo_min_fields";
			description?:string,
			id?:number
	},
	/** response of any mutation on the table "todo" */
["todo_mutation_response"]: {
		__typename?: "todo_mutation_response";
			/** number of rows affected by the mutation */
	affected_rows?:number,
			/** data from the rows affected by the mutation */
	returning?:PartialObjects["todo"][]
	},
	/** input type for inserting object relation for remote table "todo" */
["todo_obj_rel_insert_input"]: {
	data:PartialObjects["todo_insert_input"],
	/** on conflict condition */
	on_conflict?:PartialObjects["todo_on_conflict"]
},
	/** on conflict condition type for table "todo" */
["todo_on_conflict"]: {
	constraint:PartialObjects["todo_constraint"],
	update_columns:PartialObjects["todo_update_column"][],
	where?:PartialObjects["todo_bool_exp"]
},
	/** Ordering options when selecting data from "todo". */
["todo_order_by"]: {
	description?:PartialObjects["order_by"],
	id?:PartialObjects["order_by"],
	is_completed?:PartialObjects["order_by"],
	user_todos_aggregate?:PartialObjects["user_todo_aggregate_order_by"]
},
	/** primary key columns input for table: todo */
["todo_pk_columns_input"]: {
	id:number
},
	/** select columns of table "todo" */
["todo_select_column"]:todo_select_column,
	/** input type for updating data in table "todo" */
["todo_set_input"]: {
	description?:string,
	id?:number,
	is_completed?:boolean
},
	/** aggregate stddev on columns */
["todo_stddev_fields"]: {
		__typename?: "todo_stddev_fields";
			id?:number
	},
	/** aggregate stddev_pop on columns */
["todo_stddev_pop_fields"]: {
		__typename?: "todo_stddev_pop_fields";
			id?:number
	},
	/** aggregate stddev_samp on columns */
["todo_stddev_samp_fields"]: {
		__typename?: "todo_stddev_samp_fields";
			id?:number
	},
	/** aggregate sum on columns */
["todo_sum_fields"]: {
		__typename?: "todo_sum_fields";
			id?:number
	},
	/** update columns of table "todo" */
["todo_update_column"]:todo_update_column,
	/** aggregate var_pop on columns */
["todo_var_pop_fields"]: {
		__typename?: "todo_var_pop_fields";
			id?:number
	},
	/** aggregate var_samp on columns */
["todo_var_samp_fields"]: {
		__typename?: "todo_var_samp_fields";
			id?:number
	},
	/** aggregate variance on columns */
["todo_variance_fields"]: {
		__typename?: "todo_variance_fields";
			id?:number
	},
	/** columns and relationships of "user" */
["user"]: {
		__typename?: "user";
			id?:number,
			password?:string,
			/** An array relationship */
	user_todos?:PartialObjects["user_todo"][],
			/** An aggregate relationship */
	user_todos_aggregate?:PartialObjects["user_todo_aggregate"],
			username?:string
	},
	/** aggregated selection of "user" */
["user_aggregate"]: {
		__typename?: "user_aggregate";
			aggregate?:PartialObjects["user_aggregate_fields"],
			nodes?:PartialObjects["user"][]
	},
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
		__typename?: "user_aggregate_fields";
			avg?:PartialObjects["user_avg_fields"],
			count?:number,
			max?:PartialObjects["user_max_fields"],
			min?:PartialObjects["user_min_fields"],
			stddev?:PartialObjects["user_stddev_fields"],
			stddev_pop?:PartialObjects["user_stddev_pop_fields"],
			stddev_samp?:PartialObjects["user_stddev_samp_fields"],
			sum?:PartialObjects["user_sum_fields"],
			var_pop?:PartialObjects["user_var_pop_fields"],
			var_samp?:PartialObjects["user_var_samp_fields"],
			variance?:PartialObjects["user_variance_fields"]
	},
	/** aggregate avg on columns */
["user_avg_fields"]: {
		__typename?: "user_avg_fields";
			id?:number
	},
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
	_and?:PartialObjects["user_bool_exp"][],
	_not?:PartialObjects["user_bool_exp"],
	_or?:PartialObjects["user_bool_exp"][],
	id?:PartialObjects["Int_comparison_exp"],
	password?:PartialObjects["String_comparison_exp"],
	user_todos?:PartialObjects["user_todo_bool_exp"],
	username?:PartialObjects["String_comparison_exp"]
},
	/** unique or primary key constraints on table "user" */
["user_constraint"]:user_constraint,
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: {
	id?:number
},
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
	id?:number,
	password?:string,
	user_todos?:PartialObjects["user_todo_arr_rel_insert_input"],
	username?:string
},
	/** aggregate max on columns */
["user_max_fields"]: {
		__typename?: "user_max_fields";
			id?:number,
			password?:string,
			username?:string
	},
	/** aggregate min on columns */
["user_min_fields"]: {
		__typename?: "user_min_fields";
			id?:number,
			password?:string,
			username?:string
	},
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
		__typename?: "user_mutation_response";
			/** number of rows affected by the mutation */
	affected_rows?:number,
			/** data from the rows affected by the mutation */
	returning?:PartialObjects["user"][]
	},
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
	data:PartialObjects["user_insert_input"],
	/** on conflict condition */
	on_conflict?:PartialObjects["user_on_conflict"]
},
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
	constraint:PartialObjects["user_constraint"],
	update_columns:PartialObjects["user_update_column"][],
	where?:PartialObjects["user_bool_exp"]
},
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
	id?:PartialObjects["order_by"],
	password?:PartialObjects["order_by"],
	user_todos_aggregate?:PartialObjects["user_todo_aggregate_order_by"],
	username?:PartialObjects["order_by"]
},
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
	id:number
},
	/** select columns of table "user" */
["user_select_column"]:user_select_column,
	/** input type for updating data in table "user" */
["user_set_input"]: {
	id?:number,
	password?:string,
	username?:string
},
	/** aggregate stddev on columns */
["user_stddev_fields"]: {
		__typename?: "user_stddev_fields";
			id?:number
	},
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: {
		__typename?: "user_stddev_pop_fields";
			id?:number
	},
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: {
		__typename?: "user_stddev_samp_fields";
			id?:number
	},
	/** aggregate sum on columns */
["user_sum_fields"]: {
		__typename?: "user_sum_fields";
			id?:number
	},
	/** columns and relationships of "user_todo" */
["user_todo"]: {
		__typename?: "user_todo";
			/** An object relationship */
	todo?:PartialObjects["todo"],
			todo_id?:number,
			/** An object relationship */
	user?:PartialObjects["user"],
			user_id?:number
	},
	/** aggregated selection of "user_todo" */
["user_todo_aggregate"]: {
		__typename?: "user_todo_aggregate";
			aggregate?:PartialObjects["user_todo_aggregate_fields"],
			nodes?:PartialObjects["user_todo"][]
	},
	/** aggregate fields of "user_todo" */
["user_todo_aggregate_fields"]: {
		__typename?: "user_todo_aggregate_fields";
			avg?:PartialObjects["user_todo_avg_fields"],
			count?:number,
			max?:PartialObjects["user_todo_max_fields"],
			min?:PartialObjects["user_todo_min_fields"],
			stddev?:PartialObjects["user_todo_stddev_fields"],
			stddev_pop?:PartialObjects["user_todo_stddev_pop_fields"],
			stddev_samp?:PartialObjects["user_todo_stddev_samp_fields"],
			sum?:PartialObjects["user_todo_sum_fields"],
			var_pop?:PartialObjects["user_todo_var_pop_fields"],
			var_samp?:PartialObjects["user_todo_var_samp_fields"],
			variance?:PartialObjects["user_todo_variance_fields"]
	},
	/** order by aggregate values of table "user_todo" */
["user_todo_aggregate_order_by"]: {
	avg?:PartialObjects["user_todo_avg_order_by"],
	count?:PartialObjects["order_by"],
	max?:PartialObjects["user_todo_max_order_by"],
	min?:PartialObjects["user_todo_min_order_by"],
	stddev?:PartialObjects["user_todo_stddev_order_by"],
	stddev_pop?:PartialObjects["user_todo_stddev_pop_order_by"],
	stddev_samp?:PartialObjects["user_todo_stddev_samp_order_by"],
	sum?:PartialObjects["user_todo_sum_order_by"],
	var_pop?:PartialObjects["user_todo_var_pop_order_by"],
	var_samp?:PartialObjects["user_todo_var_samp_order_by"],
	variance?:PartialObjects["user_todo_variance_order_by"]
},
	/** input type for inserting array relation for remote table "user_todo" */
["user_todo_arr_rel_insert_input"]: {
	data:PartialObjects["user_todo_insert_input"][],
	/** on conflict condition */
	on_conflict?:PartialObjects["user_todo_on_conflict"]
},
	/** aggregate avg on columns */
["user_todo_avg_fields"]: {
		__typename?: "user_todo_avg_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by avg() on columns of table "user_todo" */
["user_todo_avg_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** Boolean expression to filter rows from the table "user_todo". All fields are combined with a logical 'AND'. */
["user_todo_bool_exp"]: {
	_and?:PartialObjects["user_todo_bool_exp"][],
	_not?:PartialObjects["user_todo_bool_exp"],
	_or?:PartialObjects["user_todo_bool_exp"][],
	todo?:PartialObjects["todo_bool_exp"],
	todo_id?:PartialObjects["Int_comparison_exp"],
	user?:PartialObjects["user_bool_exp"],
	user_id?:PartialObjects["Int_comparison_exp"]
},
	/** unique or primary key constraints on table "user_todo" */
["user_todo_constraint"]:user_todo_constraint,
	/** input type for incrementing numeric columns in table "user_todo" */
["user_todo_inc_input"]: {
	todo_id?:number,
	user_id?:number
},
	/** input type for inserting data into table "user_todo" */
["user_todo_insert_input"]: {
	todo?:PartialObjects["todo_obj_rel_insert_input"],
	todo_id?:number,
	user?:PartialObjects["user_obj_rel_insert_input"],
	user_id?:number
},
	/** aggregate max on columns */
["user_todo_max_fields"]: {
		__typename?: "user_todo_max_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by max() on columns of table "user_todo" */
["user_todo_max_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate min on columns */
["user_todo_min_fields"]: {
		__typename?: "user_todo_min_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by min() on columns of table "user_todo" */
["user_todo_min_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** response of any mutation on the table "user_todo" */
["user_todo_mutation_response"]: {
		__typename?: "user_todo_mutation_response";
			/** number of rows affected by the mutation */
	affected_rows?:number,
			/** data from the rows affected by the mutation */
	returning?:PartialObjects["user_todo"][]
	},
	/** on conflict condition type for table "user_todo" */
["user_todo_on_conflict"]: {
	constraint:PartialObjects["user_todo_constraint"],
	update_columns:PartialObjects["user_todo_update_column"][],
	where?:PartialObjects["user_todo_bool_exp"]
},
	/** Ordering options when selecting data from "user_todo". */
["user_todo_order_by"]: {
	todo?:PartialObjects["todo_order_by"],
	todo_id?:PartialObjects["order_by"],
	user?:PartialObjects["user_order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** primary key columns input for table: user_todo */
["user_todo_pk_columns_input"]: {
	todo_id:number,
	user_id:number
},
	/** select columns of table "user_todo" */
["user_todo_select_column"]:user_todo_select_column,
	/** input type for updating data in table "user_todo" */
["user_todo_set_input"]: {
	todo_id?:number,
	user_id?:number
},
	/** aggregate stddev on columns */
["user_todo_stddev_fields"]: {
		__typename?: "user_todo_stddev_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by stddev() on columns of table "user_todo" */
["user_todo_stddev_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate stddev_pop on columns */
["user_todo_stddev_pop_fields"]: {
		__typename?: "user_todo_stddev_pop_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by stddev_pop() on columns of table "user_todo" */
["user_todo_stddev_pop_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate stddev_samp on columns */
["user_todo_stddev_samp_fields"]: {
		__typename?: "user_todo_stddev_samp_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by stddev_samp() on columns of table "user_todo" */
["user_todo_stddev_samp_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate sum on columns */
["user_todo_sum_fields"]: {
		__typename?: "user_todo_sum_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by sum() on columns of table "user_todo" */
["user_todo_sum_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** update columns of table "user_todo" */
["user_todo_update_column"]:user_todo_update_column,
	/** aggregate var_pop on columns */
["user_todo_var_pop_fields"]: {
		__typename?: "user_todo_var_pop_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by var_pop() on columns of table "user_todo" */
["user_todo_var_pop_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate var_samp on columns */
["user_todo_var_samp_fields"]: {
		__typename?: "user_todo_var_samp_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by var_samp() on columns of table "user_todo" */
["user_todo_var_samp_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** aggregate variance on columns */
["user_todo_variance_fields"]: {
		__typename?: "user_todo_variance_fields";
			todo_id?:number,
			user_id?:number
	},
	/** order by variance() on columns of table "user_todo" */
["user_todo_variance_order_by"]: {
	todo_id?:PartialObjects["order_by"],
	user_id?:PartialObjects["order_by"]
},
	/** update columns of table "user" */
["user_update_column"]:user_update_column,
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: {
		__typename?: "user_var_pop_fields";
			id?:number
	},
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: {
		__typename?: "user_var_samp_fields";
			id?:number
	},
	/** aggregate variance on columns */
["user_variance_fields"]: {
		__typename?: "user_variance_fields";
			id?:number
	}
  }



/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
		_eq?:boolean,
	_gt?:boolean,
	_gte?:boolean,
	_in?:boolean[],
	_is_null?:boolean,
	_lt?:boolean,
	_lte?:boolean,
	_neq?:boolean,
	_nin?:boolean[]
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
		_eq?:number,
	_gt?:number,
	_gte?:number,
	_in?:number[],
	_is_null?:boolean,
	_lt?:number,
	_lte?:number,
	_neq?:number,
	_nin?:number[]
}

export type JwtToken = {
	__typename?: "JwtToken",
	token:string
}

export type LoginInput = {
		password:string,
	username:string
}

/** mutation root */
export type mutation_root = {
	__typename?: "mutation_root",
	/** delete data from the table: "todo" */
	delete_todo?:todo_mutation_response,
	/** delete single row from the table: "todo" */
	delete_todo_by_pk?:todo,
	/** delete data from the table: "user" */
	delete_user?:user_mutation_response,
	/** delete single row from the table: "user" */
	delete_user_by_pk?:user,
	/** delete data from the table: "user_todo" */
	delete_user_todo?:user_todo_mutation_response,
	/** delete single row from the table: "user_todo" */
	delete_user_todo_by_pk?:user_todo,
	/** insert data into the table: "todo" */
	insert_todo?:todo_mutation_response,
	/** insert a single row into the table: "todo" */
	insert_todo_one?:todo,
	/** insert data into the table: "user" */
	insert_user?:user_mutation_response,
	/** insert a single row into the table: "user" */
	insert_user_one?:user,
	/** insert data into the table: "user_todo" */
	insert_user_todo?:user_todo_mutation_response,
	/** insert a single row into the table: "user_todo" */
	insert_user_todo_one?:user_todo,
	signup?:JwtToken,
	/** update data of the table: "todo" */
	update_todo?:todo_mutation_response,
	/** update single row of the table: "todo" */
	update_todo_by_pk?:todo,
	/** update data of the table: "user" */
	update_user?:user_mutation_response,
	/** update single row of the table: "user" */
	update_user_by_pk?:user,
	/** update data of the table: "user_todo" */
	update_user_todo?:user_todo_mutation_response,
	/** update single row of the table: "user_todo" */
	update_user_todo_by_pk?:user_todo
}

/** column ordering options */
export enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}

export type query_root = {
	__typename?: "query_root",
	login?:JwtToken,
	/** fetch data from the table: "todo" */
	todo:todo[],
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate:todo_aggregate,
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:todo,
	/** fetch data from the table: "user" */
	user:user[],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:user_aggregate,
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:user,
	/** fetch data from the table: "user_todo" */
	user_todo:user_todo[],
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate:user_todo_aggregate,
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:user_todo
}

export type SignupInput = {
		password:string,
	username:string
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
		_eq?:string,
	_gt?:string,
	_gte?:string,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string,
	_is_null?:boolean,
	/** does the column match the given pattern */
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string,
	/** does the column NOT match the given pattern */
	_nlike?:string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string,
	/** does the column match the given SQL regular expression */
	_similar?:string
}

export type subscription_root = {
	__typename?: "subscription_root",
	/** fetch data from the table: "todo" */
	todo:todo[],
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate:todo_aggregate,
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:todo,
	/** fetch data from the table: "user" */
	user:user[],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:user_aggregate,
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:user,
	/** fetch data from the table: "user_todo" */
	user_todo:user_todo[],
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate:user_todo_aggregate,
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:user_todo
}

/** columns and relationships of "todo" */
export type todo = {
	__typename?: "todo",
	description:string,
	id:number,
	is_completed:boolean,
	/** An array relationship */
	user_todos:user_todo[],
	/** An aggregate relationship */
	user_todos_aggregate:user_todo_aggregate
}

/** aggregated selection of "todo" */
export type todo_aggregate = {
	__typename?: "todo_aggregate",
	aggregate?:todo_aggregate_fields,
	nodes:todo[]
}

/** aggregate fields of "todo" */
export type todo_aggregate_fields = {
	__typename?: "todo_aggregate_fields",
	avg?:todo_avg_fields,
	count:number,
	max?:todo_max_fields,
	min?:todo_min_fields,
	stddev?:todo_stddev_fields,
	stddev_pop?:todo_stddev_pop_fields,
	stddev_samp?:todo_stddev_samp_fields,
	sum?:todo_sum_fields,
	var_pop?:todo_var_pop_fields,
	var_samp?:todo_var_samp_fields,
	variance?:todo_variance_fields
}

/** aggregate avg on columns */
export type todo_avg_fields = {
	__typename?: "todo_avg_fields",
	id?:number
}

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type todo_bool_exp = {
		_and?:todo_bool_exp[],
	_not?:todo_bool_exp,
	_or?:todo_bool_exp[],
	description?:String_comparison_exp,
	id?:Int_comparison_exp,
	is_completed?:Boolean_comparison_exp,
	user_todos?:user_todo_bool_exp
}

/** unique or primary key constraints on table "todo" */
export enum todo_constraint {
	todo_pkey = "todo_pkey"
}

/** input type for incrementing numeric columns in table "todo" */
export type todo_inc_input = {
		id?:number
}

/** input type for inserting data into table "todo" */
export type todo_insert_input = {
		description?:string,
	id?:number,
	is_completed?:boolean,
	user_todos?:user_todo_arr_rel_insert_input
}

/** aggregate max on columns */
export type todo_max_fields = {
	__typename?: "todo_max_fields",
	description?:string,
	id?:number
}

/** aggregate min on columns */
export type todo_min_fields = {
	__typename?: "todo_min_fields",
	description?:string,
	id?:number
}

/** response of any mutation on the table "todo" */
export type todo_mutation_response = {
	__typename?: "todo_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:todo[]
}

/** input type for inserting object relation for remote table "todo" */
export type todo_obj_rel_insert_input = {
		data:todo_insert_input,
	/** on conflict condition */
	on_conflict?:todo_on_conflict
}

/** on conflict condition type for table "todo" */
export type todo_on_conflict = {
		constraint:todo_constraint,
	update_columns:todo_update_column[],
	where?:todo_bool_exp
}

/** Ordering options when selecting data from "todo". */
export type todo_order_by = {
		description?:order_by,
	id?:order_by,
	is_completed?:order_by,
	user_todos_aggregate?:user_todo_aggregate_order_by
}

/** primary key columns input for table: todo */
export type todo_pk_columns_input = {
		id:number
}

/** select columns of table "todo" */
export enum todo_select_column {
	description = "description",
	id = "id",
	is_completed = "is_completed"
}

/** input type for updating data in table "todo" */
export type todo_set_input = {
		description?:string,
	id?:number,
	is_completed?:boolean
}

/** aggregate stddev on columns */
export type todo_stddev_fields = {
	__typename?: "todo_stddev_fields",
	id?:number
}

/** aggregate stddev_pop on columns */
export type todo_stddev_pop_fields = {
	__typename?: "todo_stddev_pop_fields",
	id?:number
}

/** aggregate stddev_samp on columns */
export type todo_stddev_samp_fields = {
	__typename?: "todo_stddev_samp_fields",
	id?:number
}

/** aggregate sum on columns */
export type todo_sum_fields = {
	__typename?: "todo_sum_fields",
	id?:number
}

/** update columns of table "todo" */
export enum todo_update_column {
	description = "description",
	id = "id",
	is_completed = "is_completed"
}

/** aggregate var_pop on columns */
export type todo_var_pop_fields = {
	__typename?: "todo_var_pop_fields",
	id?:number
}

/** aggregate var_samp on columns */
export type todo_var_samp_fields = {
	__typename?: "todo_var_samp_fields",
	id?:number
}

/** aggregate variance on columns */
export type todo_variance_fields = {
	__typename?: "todo_variance_fields",
	id?:number
}

/** columns and relationships of "user" */
export type user = {
	__typename?: "user",
	id:number,
	password:string,
	/** An array relationship */
	user_todos:user_todo[],
	/** An aggregate relationship */
	user_todos_aggregate:user_todo_aggregate,
	username:string
}

/** aggregated selection of "user" */
export type user_aggregate = {
	__typename?: "user_aggregate",
	aggregate?:user_aggregate_fields,
	nodes:user[]
}

/** aggregate fields of "user" */
export type user_aggregate_fields = {
	__typename?: "user_aggregate_fields",
	avg?:user_avg_fields,
	count:number,
	max?:user_max_fields,
	min?:user_min_fields,
	stddev?:user_stddev_fields,
	stddev_pop?:user_stddev_pop_fields,
	stddev_samp?:user_stddev_samp_fields,
	sum?:user_sum_fields,
	var_pop?:user_var_pop_fields,
	var_samp?:user_var_samp_fields,
	variance?:user_variance_fields
}

/** aggregate avg on columns */
export type user_avg_fields = {
	__typename?: "user_avg_fields",
	id?:number
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type user_bool_exp = {
		_and?:user_bool_exp[],
	_not?:user_bool_exp,
	_or?:user_bool_exp[],
	id?:Int_comparison_exp,
	password?:String_comparison_exp,
	user_todos?:user_todo_bool_exp,
	username?:String_comparison_exp
}

/** unique or primary key constraints on table "user" */
export enum user_constraint {
	user_pkey = "user_pkey",
	user_username_key = "user_username_key"
}

/** input type for incrementing numeric columns in table "user" */
export type user_inc_input = {
		id?:number
}

/** input type for inserting data into table "user" */
export type user_insert_input = {
		id?:number,
	password?:string,
	user_todos?:user_todo_arr_rel_insert_input,
	username?:string
}

/** aggregate max on columns */
export type user_max_fields = {
	__typename?: "user_max_fields",
	id?:number,
	password?:string,
	username?:string
}

/** aggregate min on columns */
export type user_min_fields = {
	__typename?: "user_min_fields",
	id?:number,
	password?:string,
	username?:string
}

/** response of any mutation on the table "user" */
export type user_mutation_response = {
	__typename?: "user_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:user[]
}

/** input type for inserting object relation for remote table "user" */
export type user_obj_rel_insert_input = {
		data:user_insert_input,
	/** on conflict condition */
	on_conflict?:user_on_conflict
}

/** on conflict condition type for table "user" */
export type user_on_conflict = {
		constraint:user_constraint,
	update_columns:user_update_column[],
	where?:user_bool_exp
}

/** Ordering options when selecting data from "user". */
export type user_order_by = {
		id?:order_by,
	password?:order_by,
	user_todos_aggregate?:user_todo_aggregate_order_by,
	username?:order_by
}

/** primary key columns input for table: user */
export type user_pk_columns_input = {
		id:number
}

/** select columns of table "user" */
export enum user_select_column {
	id = "id",
	password = "password",
	username = "username"
}

/** input type for updating data in table "user" */
export type user_set_input = {
		id?:number,
	password?:string,
	username?:string
}

/** aggregate stddev on columns */
export type user_stddev_fields = {
	__typename?: "user_stddev_fields",
	id?:number
}

/** aggregate stddev_pop on columns */
export type user_stddev_pop_fields = {
	__typename?: "user_stddev_pop_fields",
	id?:number
}

/** aggregate stddev_samp on columns */
export type user_stddev_samp_fields = {
	__typename?: "user_stddev_samp_fields",
	id?:number
}

/** aggregate sum on columns */
export type user_sum_fields = {
	__typename?: "user_sum_fields",
	id?:number
}

/** columns and relationships of "user_todo" */
export type user_todo = {
	__typename?: "user_todo",
	/** An object relationship */
	todo:todo,
	todo_id:number,
	/** An object relationship */
	user:user,
	user_id:number
}

/** aggregated selection of "user_todo" */
export type user_todo_aggregate = {
	__typename?: "user_todo_aggregate",
	aggregate?:user_todo_aggregate_fields,
	nodes:user_todo[]
}

/** aggregate fields of "user_todo" */
export type user_todo_aggregate_fields = {
	__typename?: "user_todo_aggregate_fields",
	avg?:user_todo_avg_fields,
	count:number,
	max?:user_todo_max_fields,
	min?:user_todo_min_fields,
	stddev?:user_todo_stddev_fields,
	stddev_pop?:user_todo_stddev_pop_fields,
	stddev_samp?:user_todo_stddev_samp_fields,
	sum?:user_todo_sum_fields,
	var_pop?:user_todo_var_pop_fields,
	var_samp?:user_todo_var_samp_fields,
	variance?:user_todo_variance_fields
}

/** order by aggregate values of table "user_todo" */
export type user_todo_aggregate_order_by = {
		avg?:user_todo_avg_order_by,
	count?:order_by,
	max?:user_todo_max_order_by,
	min?:user_todo_min_order_by,
	stddev?:user_todo_stddev_order_by,
	stddev_pop?:user_todo_stddev_pop_order_by,
	stddev_samp?:user_todo_stddev_samp_order_by,
	sum?:user_todo_sum_order_by,
	var_pop?:user_todo_var_pop_order_by,
	var_samp?:user_todo_var_samp_order_by,
	variance?:user_todo_variance_order_by
}

/** input type for inserting array relation for remote table "user_todo" */
export type user_todo_arr_rel_insert_input = {
		data:user_todo_insert_input[],
	/** on conflict condition */
	on_conflict?:user_todo_on_conflict
}

/** aggregate avg on columns */
export type user_todo_avg_fields = {
	__typename?: "user_todo_avg_fields",
	todo_id?:number,
	user_id?:number
}

/** order by avg() on columns of table "user_todo" */
export type user_todo_avg_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** Boolean expression to filter rows from the table "user_todo". All fields are combined with a logical 'AND'. */
export type user_todo_bool_exp = {
		_and?:user_todo_bool_exp[],
	_not?:user_todo_bool_exp,
	_or?:user_todo_bool_exp[],
	todo?:todo_bool_exp,
	todo_id?:Int_comparison_exp,
	user?:user_bool_exp,
	user_id?:Int_comparison_exp
}

/** unique or primary key constraints on table "user_todo" */
export enum user_todo_constraint {
	user_todo_pkey = "user_todo_pkey"
}

/** input type for incrementing numeric columns in table "user_todo" */
export type user_todo_inc_input = {
		todo_id?:number,
	user_id?:number
}

/** input type for inserting data into table "user_todo" */
export type user_todo_insert_input = {
		todo?:todo_obj_rel_insert_input,
	todo_id?:number,
	user?:user_obj_rel_insert_input,
	user_id?:number
}

/** aggregate max on columns */
export type user_todo_max_fields = {
	__typename?: "user_todo_max_fields",
	todo_id?:number,
	user_id?:number
}

/** order by max() on columns of table "user_todo" */
export type user_todo_max_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate min on columns */
export type user_todo_min_fields = {
	__typename?: "user_todo_min_fields",
	todo_id?:number,
	user_id?:number
}

/** order by min() on columns of table "user_todo" */
export type user_todo_min_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** response of any mutation on the table "user_todo" */
export type user_todo_mutation_response = {
	__typename?: "user_todo_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:user_todo[]
}

/** on conflict condition type for table "user_todo" */
export type user_todo_on_conflict = {
		constraint:user_todo_constraint,
	update_columns:user_todo_update_column[],
	where?:user_todo_bool_exp
}

/** Ordering options when selecting data from "user_todo". */
export type user_todo_order_by = {
		todo?:todo_order_by,
	todo_id?:order_by,
	user?:user_order_by,
	user_id?:order_by
}

/** primary key columns input for table: user_todo */
export type user_todo_pk_columns_input = {
		todo_id:number,
	user_id:number
}

/** select columns of table "user_todo" */
export enum user_todo_select_column {
	todo_id = "todo_id",
	user_id = "user_id"
}

/** input type for updating data in table "user_todo" */
export type user_todo_set_input = {
		todo_id?:number,
	user_id?:number
}

/** aggregate stddev on columns */
export type user_todo_stddev_fields = {
	__typename?: "user_todo_stddev_fields",
	todo_id?:number,
	user_id?:number
}

/** order by stddev() on columns of table "user_todo" */
export type user_todo_stddev_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate stddev_pop on columns */
export type user_todo_stddev_pop_fields = {
	__typename?: "user_todo_stddev_pop_fields",
	todo_id?:number,
	user_id?:number
}

/** order by stddev_pop() on columns of table "user_todo" */
export type user_todo_stddev_pop_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate stddev_samp on columns */
export type user_todo_stddev_samp_fields = {
	__typename?: "user_todo_stddev_samp_fields",
	todo_id?:number,
	user_id?:number
}

/** order by stddev_samp() on columns of table "user_todo" */
export type user_todo_stddev_samp_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate sum on columns */
export type user_todo_sum_fields = {
	__typename?: "user_todo_sum_fields",
	todo_id?:number,
	user_id?:number
}

/** order by sum() on columns of table "user_todo" */
export type user_todo_sum_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** update columns of table "user_todo" */
export enum user_todo_update_column {
	todo_id = "todo_id",
	user_id = "user_id"
}

/** aggregate var_pop on columns */
export type user_todo_var_pop_fields = {
	__typename?: "user_todo_var_pop_fields",
	todo_id?:number,
	user_id?:number
}

/** order by var_pop() on columns of table "user_todo" */
export type user_todo_var_pop_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate var_samp on columns */
export type user_todo_var_samp_fields = {
	__typename?: "user_todo_var_samp_fields",
	todo_id?:number,
	user_id?:number
}

/** order by var_samp() on columns of table "user_todo" */
export type user_todo_var_samp_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** aggregate variance on columns */
export type user_todo_variance_fields = {
	__typename?: "user_todo_variance_fields",
	todo_id?:number,
	user_id?:number
}

/** order by variance() on columns of table "user_todo" */
export type user_todo_variance_order_by = {
		todo_id?:order_by,
	user_id?:order_by
}

/** update columns of table "user" */
export enum user_update_column {
	id = "id",
	password = "password",
	username = "username"
}

/** aggregate var_pop on columns */
export type user_var_pop_fields = {
	__typename?: "user_var_pop_fields",
	id?:number
}

/** aggregate var_samp on columns */
export type user_var_samp_fields = {
	__typename?: "user_var_samp_fields",
	id?:number
}

/** aggregate variance on columns */
export type user_variance_fields = {
	__typename?: "user_variance_fields",
	id?:number
}

export const AllTypesProps: Record<string,any> = {
	cached:{
		ttl:{
			60:{
				type:"IntValue",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		refresh:{
			false:{
				type:"BooleanValue",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Boolean_comparison_exp:{
		_eq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"Boolean",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"Boolean",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	Int_comparison_exp:{
		_eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:true
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	LoginInput:{
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	mutation_root:{
		delete_todo:{
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_todo_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user:{
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user_todo:{
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		delete_user_todo_by_pk:{
			todo_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			user_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		insert_todo:{
			objects:{
				type:"todo_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"todo_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_todo_one:{
			object:{
				type:"todo_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"todo_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user:{
			objects:{
				type:"user_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user_one:{
			object:{
				type:"user_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"user_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user_todo:{
			objects:{
				type:"user_todo_insert_input",
				array:true,
				arrayRequired:true,
				required:true
			},
			on_conflict:{
				type:"user_todo_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		insert_user_todo_one:{
			object:{
				type:"user_todo_insert_input",
				array:false,
				arrayRequired:false,
				required:true
			},
			on_conflict:{
				type:"user_todo_on_conflict",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		signup:{
			params:{
				type:"SignupInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_todo:{
			_inc:{
				type:"todo_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"todo_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_todo_by_pk:{
			_inc:{
				type:"todo_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"todo_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"todo_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user:{
			_inc:{
				type:"user_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user_by_pk:{
			_inc:{
				type:"user_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"user_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"user_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user_todo:{
			_inc:{
				type:"user_todo_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"user_todo_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update_user_todo_by_pk:{
			_inc:{
				type:"user_todo_inc_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			_set:{
				type:"user_todo_set_input",
				array:false,
				arrayRequired:false,
				required:false
			},
			pk_columns:{
				type:"user_todo_pk_columns_input",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	order_by: "enum",
	query_root:{
		login:{
			params:{
				type:"LoginInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		todo:{
			distinct_on:{
				type:"todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		todo_aggregate:{
			distinct_on:{
				type:"todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		todo_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_aggregate:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user_todo:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todo_aggregate:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todo_by_pk:{
			todo_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			user_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SignupInput:{
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	String_comparison_exp:{
		_eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_gte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_ilike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_iregex:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		_like:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_lte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_neq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nilike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nin:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_niregex:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nlike:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nregex:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_nsimilar:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_regex:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_similar:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	subscription_root:{
		todo:{
			distinct_on:{
				type:"todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		todo_aggregate:{
			distinct_on:{
				type:"todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		todo_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_aggregate:{
			distinct_on:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_by_pk:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		user_todo:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todo_aggregate:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todo_by_pk:{
			todo_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			user_id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	todo:{
		user_todos:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todos_aggregate:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	todo_aggregate_fields:{
		count:{
			columns:{
				type:"todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	todo_bool_exp:{
		_and:{
			type:"todo_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		_not:{
			type:"todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"todo_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_completed:{
			type:"Boolean_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos:{
			type:"user_todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_constraint: "enum",
	todo_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_insert_input:{
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_completed:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos:{
			type:"user_todo_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_obj_rel_insert_input:{
		data:{
			type:"todo_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"todo_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_on_conflict:{
		constraint:{
			type:"todo_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"todo_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_order_by:{
		description:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_completed:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos_aggregate:{
			type:"user_todo_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_pk_columns_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	todo_select_column: "enum",
	todo_set_input:{
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_completed:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	todo_update_column: "enum",
	user:{
		user_todos:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		user_todos_aggregate:{
			distinct_on:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			order_by:{
				type:"user_todo_order_by",
				array:true,
				arrayRequired:false,
				required:true
			},
			where:{
				type:"user_todo_bool_exp",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	user_aggregate_fields:{
		count:{
			columns:{
				type:"user_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	user_bool_exp:{
		_and:{
			type:"user_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		_not:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"user_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos:{
			type:"user_todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_constraint: "enum",
	user_inc_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_insert_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos:{
			type:"user_todo_arr_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_obj_rel_insert_input:{
		data:{
			type:"user_insert_input",
			array:false,
			arrayRequired:false,
			required:true
		},
		on_conflict:{
			type:"user_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_on_conflict:{
		constraint:{
			type:"user_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"user_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_order_by:{
		id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_todos_aggregate:{
			type:"user_todo_aggregate_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_pk_columns_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	user_select_column: "enum",
	user_set_input:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_aggregate_fields:{
		count:{
			columns:{
				type:"user_todo_select_column",
				array:true,
				arrayRequired:false,
				required:true
			},
			distinct:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	user_todo_aggregate_order_by:{
		avg:{
			type:"user_todo_avg_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		count:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		max:{
			type:"user_todo_max_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		min:{
			type:"user_todo_min_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev:{
			type:"user_todo_stddev_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_pop:{
			type:"user_todo_stddev_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		stddev_samp:{
			type:"user_todo_stddev_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		sum:{
			type:"user_todo_sum_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_pop:{
			type:"user_todo_var_pop_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		var_samp:{
			type:"user_todo_var_samp_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		variance:{
			type:"user_todo_variance_order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_arr_rel_insert_input:{
		data:{
			type:"user_todo_insert_input",
			array:true,
			arrayRequired:true,
			required:true
		},
		on_conflict:{
			type:"user_todo_on_conflict",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_avg_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_bool_exp:{
		_and:{
			type:"user_todo_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		_not:{
			type:"user_todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		_or:{
			type:"user_todo_bool_exp",
			array:true,
			arrayRequired:false,
			required:true
		},
		todo:{
			type:"todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		todo_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int_comparison_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_constraint: "enum",
	user_todo_inc_input:{
		todo_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_insert_input:{
		todo:{
			type:"todo_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		todo_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_obj_rel_insert_input",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_max_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_min_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_on_conflict:{
		constraint:{
			type:"user_todo_constraint",
			array:false,
			arrayRequired:false,
			required:true
		},
		update_columns:{
			type:"user_todo_update_column",
			array:true,
			arrayRequired:true,
			required:true
		},
		where:{
			type:"user_todo_bool_exp",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_order_by:{
		todo:{
			type:"todo_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"user_order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_pk_columns_input:{
		todo_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	user_todo_select_column: "enum",
	user_todo_set_input:{
		todo_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_stddev_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_stddev_pop_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_stddev_samp_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_sum_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_update_column: "enum",
	user_todo_var_pop_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_var_samp_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_todo_variance_order_by:{
		todo_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_id:{
			type:"order_by",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	user_update_column: "enum"
}

export const ReturnTypes: Record<string,any> = {
	JwtToken:{
		token:"String"
	},
	mutation_root:{
		delete_todo:"todo_mutation_response",
		delete_todo_by_pk:"todo",
		delete_user:"user_mutation_response",
		delete_user_by_pk:"user",
		delete_user_todo:"user_todo_mutation_response",
		delete_user_todo_by_pk:"user_todo",
		insert_todo:"todo_mutation_response",
		insert_todo_one:"todo",
		insert_user:"user_mutation_response",
		insert_user_one:"user",
		insert_user_todo:"user_todo_mutation_response",
		insert_user_todo_one:"user_todo",
		signup:"JwtToken",
		update_todo:"todo_mutation_response",
		update_todo_by_pk:"todo",
		update_user:"user_mutation_response",
		update_user_by_pk:"user",
		update_user_todo:"user_todo_mutation_response",
		update_user_todo_by_pk:"user_todo"
	},
	query_root:{
		login:"JwtToken",
		todo:"todo",
		todo_aggregate:"todo_aggregate",
		todo_by_pk:"todo",
		user:"user",
		user_aggregate:"user_aggregate",
		user_by_pk:"user",
		user_todo:"user_todo",
		user_todo_aggregate:"user_todo_aggregate",
		user_todo_by_pk:"user_todo"
	},
	subscription_root:{
		todo:"todo",
		todo_aggregate:"todo_aggregate",
		todo_by_pk:"todo",
		user:"user",
		user_aggregate:"user_aggregate",
		user_by_pk:"user",
		user_todo:"user_todo",
		user_todo_aggregate:"user_todo_aggregate",
		user_todo_by_pk:"user_todo"
	},
	todo:{
		description:"String",
		id:"Int",
		is_completed:"Boolean",
		user_todos:"user_todo",
		user_todos_aggregate:"user_todo_aggregate"
	},
	todo_aggregate:{
		aggregate:"todo_aggregate_fields",
		nodes:"todo"
	},
	todo_aggregate_fields:{
		avg:"todo_avg_fields",
		count:"Int",
		max:"todo_max_fields",
		min:"todo_min_fields",
		stddev:"todo_stddev_fields",
		stddev_pop:"todo_stddev_pop_fields",
		stddev_samp:"todo_stddev_samp_fields",
		sum:"todo_sum_fields",
		var_pop:"todo_var_pop_fields",
		var_samp:"todo_var_samp_fields",
		variance:"todo_variance_fields"
	},
	todo_avg_fields:{
		id:"Float"
	},
	todo_max_fields:{
		description:"String",
		id:"Int"
	},
	todo_min_fields:{
		description:"String",
		id:"Int"
	},
	todo_mutation_response:{
		affected_rows:"Int",
		returning:"todo"
	},
	todo_stddev_fields:{
		id:"Float"
	},
	todo_stddev_pop_fields:{
		id:"Float"
	},
	todo_stddev_samp_fields:{
		id:"Float"
	},
	todo_sum_fields:{
		id:"Int"
	},
	todo_var_pop_fields:{
		id:"Float"
	},
	todo_var_samp_fields:{
		id:"Float"
	},
	todo_variance_fields:{
		id:"Float"
	},
	user:{
		id:"Int",
		password:"String",
		user_todos:"user_todo",
		user_todos_aggregate:"user_todo_aggregate",
		username:"String"
	},
	user_aggregate:{
		aggregate:"user_aggregate_fields",
		nodes:"user"
	},
	user_aggregate_fields:{
		avg:"user_avg_fields",
		count:"Int",
		max:"user_max_fields",
		min:"user_min_fields",
		stddev:"user_stddev_fields",
		stddev_pop:"user_stddev_pop_fields",
		stddev_samp:"user_stddev_samp_fields",
		sum:"user_sum_fields",
		var_pop:"user_var_pop_fields",
		var_samp:"user_var_samp_fields",
		variance:"user_variance_fields"
	},
	user_avg_fields:{
		id:"Float"
	},
	user_max_fields:{
		id:"Int",
		password:"String",
		username:"String"
	},
	user_min_fields:{
		id:"Int",
		password:"String",
		username:"String"
	},
	user_mutation_response:{
		affected_rows:"Int",
		returning:"user"
	},
	user_stddev_fields:{
		id:"Float"
	},
	user_stddev_pop_fields:{
		id:"Float"
	},
	user_stddev_samp_fields:{
		id:"Float"
	},
	user_sum_fields:{
		id:"Int"
	},
	user_todo:{
		todo:"todo",
		todo_id:"Int",
		user:"user",
		user_id:"Int"
	},
	user_todo_aggregate:{
		aggregate:"user_todo_aggregate_fields",
		nodes:"user_todo"
	},
	user_todo_aggregate_fields:{
		avg:"user_todo_avg_fields",
		count:"Int",
		max:"user_todo_max_fields",
		min:"user_todo_min_fields",
		stddev:"user_todo_stddev_fields",
		stddev_pop:"user_todo_stddev_pop_fields",
		stddev_samp:"user_todo_stddev_samp_fields",
		sum:"user_todo_sum_fields",
		var_pop:"user_todo_var_pop_fields",
		var_samp:"user_todo_var_samp_fields",
		variance:"user_todo_variance_fields"
	},
	user_todo_avg_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_max_fields:{
		todo_id:"Int",
		user_id:"Int"
	},
	user_todo_min_fields:{
		todo_id:"Int",
		user_id:"Int"
	},
	user_todo_mutation_response:{
		affected_rows:"Int",
		returning:"user_todo"
	},
	user_todo_stddev_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_stddev_pop_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_stddev_samp_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_sum_fields:{
		todo_id:"Int",
		user_id:"Int"
	},
	user_todo_var_pop_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_var_samp_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_todo_variance_fields:{
		todo_id:"Float",
		user_id:"Float"
	},
	user_var_pop_fields:{
		id:"Float"
	},
	user_var_samp_fields:{
		id:"Float"
	},
	user_variance_fields:{
		id:"Float"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }



export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ValuesOf<T> = T[keyof T];

export type MapResolve<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  ValuesOf<{
    [k in (keyof SRC['__resolve'] & keyof DST)]: ({
      [rk in (keyof SRC['__resolve'][k] & keyof DST[k])]: LastMapTypeSRCResolver<SRC['__resolve'][k][rk], DST[k][rk]>
    } & {
      __typename: SRC['__resolve'][k]['__typename']
    })
  }>
  :
  never;

export type MapInterface<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  (MapResolve<SRC, DST> extends never ? {} : MapResolve<SRC, DST>) & {
  [k in (keyof SRC['__interface'] & keyof DST)]: LastMapTypeSRCResolver<SRC['__interface'][k], DST[k]>
} : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'query_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"],query_root>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'mutation_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,
subscription: ((o: any, variables) =>
    fullChainConstruct(fn)('subscription', 'subscription_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["subscription_root"],subscription_root>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'query_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["query_root"],query_root>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'mutation_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["mutation_root"],mutation_root>,
subscription: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('subscription', 'subscription_root')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["subscription_root"],subscription_root>
});
export const Zeus = {
  query: (o:ValueTypes["query_root"]) => queryConstruct('query', 'query_root')(o),
mutation: (o:ValueTypes["mutation_root"]) => queryConstruct('mutation', 'mutation_root')(o),
subscription: (o:ValueTypes["subscription_root"]) => queryConstruct('subscription', 'subscription_root')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["query_root"],
  query_root
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["mutation_root"],
  mutation_root
>,
subscription: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["subscription_root"],
  subscription_root
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('http://localhost:8080/v1/graphql')