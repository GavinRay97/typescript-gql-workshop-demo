/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

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
	user_todos?:ValueTypes["user_todo_arr_rel_insert_input"],
	username?:string
};
	/** aggregate max on columns */
["user_max_fields"]: AliasType<{
	id?:true,
	username?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["user_min_fields"]: AliasType<{
	id?:true,
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

export type ModelTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: GraphQLTypes["Int_comparison_exp"];
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "todo" */
	delete_todo?:ModelTypes["todo_mutation_response"],
	/** delete single row from the table: "todo" */
	delete_todo_by_pk?:ModelTypes["todo"],
	/** delete data from the table: "user" */
	delete_user?:ModelTypes["user_mutation_response"],
	/** delete single row from the table: "user" */
	delete_user_by_pk?:ModelTypes["user"],
	/** delete data from the table: "user_todo" */
	delete_user_todo?:ModelTypes["user_todo_mutation_response"],
	/** delete single row from the table: "user_todo" */
	delete_user_todo_by_pk?:ModelTypes["user_todo"],
	/** insert data into the table: "todo" */
	insert_todo?:ModelTypes["todo_mutation_response"],
	/** insert a single row into the table: "todo" */
	insert_todo_one?:ModelTypes["todo"],
	/** insert data into the table: "user" */
	insert_user?:ModelTypes["user_mutation_response"],
	/** insert a single row into the table: "user" */
	insert_user_one?:ModelTypes["user"],
	/** insert data into the table: "user_todo" */
	insert_user_todo?:ModelTypes["user_todo_mutation_response"],
	/** insert a single row into the table: "user_todo" */
	insert_user_todo_one?:ModelTypes["user_todo"],
	/** update data of the table: "todo" */
	update_todo?:ModelTypes["todo_mutation_response"],
	/** update single row of the table: "todo" */
	update_todo_by_pk?:ModelTypes["todo"],
	/** update data of the table: "user" */
	update_user?:ModelTypes["user_mutation_response"],
	/** update single row of the table: "user" */
	update_user_by_pk?:ModelTypes["user"],
	/** update data of the table: "user_todo" */
	update_user_todo?:ModelTypes["user_todo_mutation_response"],
	/** update single row of the table: "user_todo" */
	update_user_todo_by_pk?:ModelTypes["user_todo"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	["query_root"]: {
		/** fetch data from the table: "todo" */
	todo:ModelTypes["todo"][],
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate:ModelTypes["todo_aggregate"],
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:ModelTypes["todo"],
	/** fetch data from the table: "user" */
	user:ModelTypes["user"][],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:ModelTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:ModelTypes["user"],
	/** fetch data from the table: "user_todo" */
	user_todo:ModelTypes["user_todo"][],
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate:ModelTypes["user_todo_aggregate"],
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:ModelTypes["user_todo"]
};
	["subscription_root"]: {
		/** fetch data from the table: "todo" */
	todo:ModelTypes["todo"][],
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate:ModelTypes["todo_aggregate"],
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?:ModelTypes["todo"],
	/** fetch data from the table: "user" */
	user:ModelTypes["user"][],
	/** fetch aggregated fields from the table: "user" */
	user_aggregate:ModelTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?:ModelTypes["user"],
	/** fetch data from the table: "user_todo" */
	user_todo:ModelTypes["user_todo"][],
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate:ModelTypes["user_todo_aggregate"],
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?:ModelTypes["user_todo"]
};
	/** columns and relationships of "todo" */
["todo"]: {
		description:string,
	id:number,
	is_completed:boolean,
	/** An array relationship */
	user_todos:ModelTypes["user_todo"][],
	/** An aggregate relationship */
	user_todos_aggregate:ModelTypes["user_todo_aggregate"]
};
	/** aggregated selection of "todo" */
["todo_aggregate"]: {
		aggregate?:ModelTypes["todo_aggregate_fields"],
	nodes:ModelTypes["todo"][]
};
	/** aggregate fields of "todo" */
["todo_aggregate_fields"]: {
		avg?:ModelTypes["todo_avg_fields"],
	count:number,
	max?:ModelTypes["todo_max_fields"],
	min?:ModelTypes["todo_min_fields"],
	stddev?:ModelTypes["todo_stddev_fields"],
	stddev_pop?:ModelTypes["todo_stddev_pop_fields"],
	stddev_samp?:ModelTypes["todo_stddev_samp_fields"],
	sum?:ModelTypes["todo_sum_fields"],
	var_pop?:ModelTypes["todo_var_pop_fields"],
	var_samp?:ModelTypes["todo_var_samp_fields"],
	variance?:ModelTypes["todo_variance_fields"]
};
	/** aggregate avg on columns */
["todo_avg_fields"]: {
		id?:number
};
	/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
["todo_bool_exp"]: GraphQLTypes["todo_bool_exp"];
	/** unique or primary key constraints on table "todo" */
["todo_constraint"]: GraphQLTypes["todo_constraint"];
	/** input type for incrementing numeric columns in table "todo" */
["todo_inc_input"]: GraphQLTypes["todo_inc_input"];
	/** input type for inserting data into table "todo" */
["todo_insert_input"]: GraphQLTypes["todo_insert_input"];
	/** aggregate max on columns */
["todo_max_fields"]: {
		description?:string,
	id?:number
};
	/** aggregate min on columns */
["todo_min_fields"]: {
		description?:string,
	id?:number
};
	/** response of any mutation on the table "todo" */
["todo_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["todo"][]
};
	/** input type for inserting object relation for remote table "todo" */
["todo_obj_rel_insert_input"]: GraphQLTypes["todo_obj_rel_insert_input"];
	/** on conflict condition type for table "todo" */
["todo_on_conflict"]: GraphQLTypes["todo_on_conflict"];
	/** Ordering options when selecting data from "todo". */
["todo_order_by"]: GraphQLTypes["todo_order_by"];
	/** primary key columns input for table: todo */
["todo_pk_columns_input"]: GraphQLTypes["todo_pk_columns_input"];
	/** select columns of table "todo" */
["todo_select_column"]: GraphQLTypes["todo_select_column"];
	/** input type for updating data in table "todo" */
["todo_set_input"]: GraphQLTypes["todo_set_input"];
	/** aggregate stddev on columns */
["todo_stddev_fields"]: {
		id?:number
};
	/** aggregate stddev_pop on columns */
["todo_stddev_pop_fields"]: {
		id?:number
};
	/** aggregate stddev_samp on columns */
["todo_stddev_samp_fields"]: {
		id?:number
};
	/** aggregate sum on columns */
["todo_sum_fields"]: {
		id?:number
};
	/** update columns of table "todo" */
["todo_update_column"]: GraphQLTypes["todo_update_column"];
	/** aggregate var_pop on columns */
["todo_var_pop_fields"]: {
		id?:number
};
	/** aggregate var_samp on columns */
["todo_var_samp_fields"]: {
		id?:number
};
	/** aggregate variance on columns */
["todo_variance_fields"]: {
		id?:number
};
	/** columns and relationships of "user" */
["user"]: {
		id:number,
	/** An array relationship */
	user_todos:ModelTypes["user_todo"][],
	/** An aggregate relationship */
	user_todos_aggregate:ModelTypes["user_todo_aggregate"],
	username:string
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
		aggregate?:ModelTypes["user_aggregate_fields"],
	nodes:ModelTypes["user"][]
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
		avg?:ModelTypes["user_avg_fields"],
	count:number,
	max?:ModelTypes["user_max_fields"],
	min?:ModelTypes["user_min_fields"],
	stddev?:ModelTypes["user_stddev_fields"],
	stddev_pop?:ModelTypes["user_stddev_pop_fields"],
	stddev_samp?:ModelTypes["user_stddev_samp_fields"],
	sum?:ModelTypes["user_sum_fields"],
	var_pop?:ModelTypes["user_var_pop_fields"],
	var_samp?:ModelTypes["user_var_samp_fields"],
	variance?:ModelTypes["user_variance_fields"]
};
	/** aggregate avg on columns */
["user_avg_fields"]: {
		id?:number
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: GraphQLTypes["user_bool_exp"];
	/** unique or primary key constraints on table "user" */
["user_constraint"]: GraphQLTypes["user_constraint"];
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: GraphQLTypes["user_inc_input"];
	/** input type for inserting data into table "user" */
["user_insert_input"]: GraphQLTypes["user_insert_input"];
	/** aggregate max on columns */
["user_max_fields"]: {
		id?:number,
	username?:string
};
	/** aggregate min on columns */
["user_min_fields"]: {
		id?:number,
	username?:string
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["user"][]
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: GraphQLTypes["user_obj_rel_insert_input"];
	/** on conflict condition type for table "user" */
["user_on_conflict"]: GraphQLTypes["user_on_conflict"];
	/** Ordering options when selecting data from "user". */
["user_order_by"]: GraphQLTypes["user_order_by"];
	/** primary key columns input for table: user */
["user_pk_columns_input"]: GraphQLTypes["user_pk_columns_input"];
	/** select columns of table "user" */
["user_select_column"]: GraphQLTypes["user_select_column"];
	/** input type for updating data in table "user" */
["user_set_input"]: GraphQLTypes["user_set_input"];
	/** aggregate stddev on columns */
["user_stddev_fields"]: {
		id?:number
};
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: {
		id?:number
};
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: {
		id?:number
};
	/** aggregate sum on columns */
["user_sum_fields"]: {
		id?:number
};
	/** columns and relationships of "user_todo" */
["user_todo"]: {
		/** An object relationship */
	todo:ModelTypes["todo"],
	todo_id:number,
	/** An object relationship */
	user:ModelTypes["user"],
	user_id:number
};
	/** aggregated selection of "user_todo" */
["user_todo_aggregate"]: {
		aggregate?:ModelTypes["user_todo_aggregate_fields"],
	nodes:ModelTypes["user_todo"][]
};
	/** aggregate fields of "user_todo" */
["user_todo_aggregate_fields"]: {
		avg?:ModelTypes["user_todo_avg_fields"],
	count:number,
	max?:ModelTypes["user_todo_max_fields"],
	min?:ModelTypes["user_todo_min_fields"],
	stddev?:ModelTypes["user_todo_stddev_fields"],
	stddev_pop?:ModelTypes["user_todo_stddev_pop_fields"],
	stddev_samp?:ModelTypes["user_todo_stddev_samp_fields"],
	sum?:ModelTypes["user_todo_sum_fields"],
	var_pop?:ModelTypes["user_todo_var_pop_fields"],
	var_samp?:ModelTypes["user_todo_var_samp_fields"],
	variance?:ModelTypes["user_todo_variance_fields"]
};
	/** order by aggregate values of table "user_todo" */
["user_todo_aggregate_order_by"]: GraphQLTypes["user_todo_aggregate_order_by"];
	/** input type for inserting array relation for remote table "user_todo" */
["user_todo_arr_rel_insert_input"]: GraphQLTypes["user_todo_arr_rel_insert_input"];
	/** aggregate avg on columns */
["user_todo_avg_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by avg() on columns of table "user_todo" */
["user_todo_avg_order_by"]: GraphQLTypes["user_todo_avg_order_by"];
	/** Boolean expression to filter rows from the table "user_todo". All fields are combined with a logical 'AND'. */
["user_todo_bool_exp"]: GraphQLTypes["user_todo_bool_exp"];
	/** unique or primary key constraints on table "user_todo" */
["user_todo_constraint"]: GraphQLTypes["user_todo_constraint"];
	/** input type for incrementing numeric columns in table "user_todo" */
["user_todo_inc_input"]: GraphQLTypes["user_todo_inc_input"];
	/** input type for inserting data into table "user_todo" */
["user_todo_insert_input"]: GraphQLTypes["user_todo_insert_input"];
	/** aggregate max on columns */
["user_todo_max_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by max() on columns of table "user_todo" */
["user_todo_max_order_by"]: GraphQLTypes["user_todo_max_order_by"];
	/** aggregate min on columns */
["user_todo_min_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by min() on columns of table "user_todo" */
["user_todo_min_order_by"]: GraphQLTypes["user_todo_min_order_by"];
	/** response of any mutation on the table "user_todo" */
["user_todo_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["user_todo"][]
};
	/** on conflict condition type for table "user_todo" */
["user_todo_on_conflict"]: GraphQLTypes["user_todo_on_conflict"];
	/** Ordering options when selecting data from "user_todo". */
["user_todo_order_by"]: GraphQLTypes["user_todo_order_by"];
	/** primary key columns input for table: user_todo */
["user_todo_pk_columns_input"]: GraphQLTypes["user_todo_pk_columns_input"];
	/** select columns of table "user_todo" */
["user_todo_select_column"]: GraphQLTypes["user_todo_select_column"];
	/** input type for updating data in table "user_todo" */
["user_todo_set_input"]: GraphQLTypes["user_todo_set_input"];
	/** aggregate stddev on columns */
["user_todo_stddev_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by stddev() on columns of table "user_todo" */
["user_todo_stddev_order_by"]: GraphQLTypes["user_todo_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["user_todo_stddev_pop_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by stddev_pop() on columns of table "user_todo" */
["user_todo_stddev_pop_order_by"]: GraphQLTypes["user_todo_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["user_todo_stddev_samp_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by stddev_samp() on columns of table "user_todo" */
["user_todo_stddev_samp_order_by"]: GraphQLTypes["user_todo_stddev_samp_order_by"];
	/** aggregate sum on columns */
["user_todo_sum_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by sum() on columns of table "user_todo" */
["user_todo_sum_order_by"]: GraphQLTypes["user_todo_sum_order_by"];
	/** update columns of table "user_todo" */
["user_todo_update_column"]: GraphQLTypes["user_todo_update_column"];
	/** aggregate var_pop on columns */
["user_todo_var_pop_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by var_pop() on columns of table "user_todo" */
["user_todo_var_pop_order_by"]: GraphQLTypes["user_todo_var_pop_order_by"];
	/** aggregate var_samp on columns */
["user_todo_var_samp_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by var_samp() on columns of table "user_todo" */
["user_todo_var_samp_order_by"]: GraphQLTypes["user_todo_var_samp_order_by"];
	/** aggregate variance on columns */
["user_todo_variance_fields"]: {
		todo_id?:number,
	user_id?:number
};
	/** order by variance() on columns of table "user_todo" */
["user_todo_variance_order_by"]: GraphQLTypes["user_todo_variance_order_by"];
	/** update columns of table "user" */
["user_update_column"]: GraphQLTypes["user_update_column"];
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: {
		id?:number
};
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: {
		id?:number
};
	/** aggregate variance on columns */
["user_variance_fields"]: {
		id?:number
}
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
		_eq?: boolean,
	_gt?: boolean,
	_gte?: boolean,
	_in?: Array<boolean>,
	_is_null?: boolean,
	_lt?: boolean,
	_lte?: boolean,
	_neq?: boolean,
	_nin?: Array<boolean>
};
	/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
["Int_comparison_exp"]: {
		_eq?: number,
	_gt?: number,
	_gte?: number,
	_in?: Array<number>,
	_is_null?: boolean,
	_lt?: number,
	_lte?: number,
	_neq?: number,
	_nin?: Array<number>
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string,
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string,
	/** does the column NOT match the given pattern */
	_nlike?: string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string,
	/** does the column match the given SQL regular expression */
	_similar?: string
};
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "todo" */
	delete_todo?: GraphQLTypes["todo_mutation_response"],
	/** delete single row from the table: "todo" */
	delete_todo_by_pk?: GraphQLTypes["todo"],
	/** delete data from the table: "user" */
	delete_user?: GraphQLTypes["user_mutation_response"],
	/** delete single row from the table: "user" */
	delete_user_by_pk?: GraphQLTypes["user"],
	/** delete data from the table: "user_todo" */
	delete_user_todo?: GraphQLTypes["user_todo_mutation_response"],
	/** delete single row from the table: "user_todo" */
	delete_user_todo_by_pk?: GraphQLTypes["user_todo"],
	/** insert data into the table: "todo" */
	insert_todo?: GraphQLTypes["todo_mutation_response"],
	/** insert a single row into the table: "todo" */
	insert_todo_one?: GraphQLTypes["todo"],
	/** insert data into the table: "user" */
	insert_user?: GraphQLTypes["user_mutation_response"],
	/** insert a single row into the table: "user" */
	insert_user_one?: GraphQLTypes["user"],
	/** insert data into the table: "user_todo" */
	insert_user_todo?: GraphQLTypes["user_todo_mutation_response"],
	/** insert a single row into the table: "user_todo" */
	insert_user_todo_one?: GraphQLTypes["user_todo"],
	/** update data of the table: "todo" */
	update_todo?: GraphQLTypes["todo_mutation_response"],
	/** update single row of the table: "todo" */
	update_todo_by_pk?: GraphQLTypes["todo"],
	/** update data of the table: "user" */
	update_user?: GraphQLTypes["user_mutation_response"],
	/** update single row of the table: "user" */
	update_user_by_pk?: GraphQLTypes["user"],
	/** update data of the table: "user_todo" */
	update_user_todo?: GraphQLTypes["user_todo_mutation_response"],
	/** update single row of the table: "user_todo" */
	update_user_todo_by_pk?: GraphQLTypes["user_todo"]
};
	/** column ordering options */
["order_by"]: order_by;
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "todo" */
	todo: Array<GraphQLTypes["todo"]>,
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate: GraphQLTypes["todo_aggregate"],
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?: GraphQLTypes["todo"],
	/** fetch data from the table: "user" */
	user: Array<GraphQLTypes["user"]>,
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: GraphQLTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: GraphQLTypes["user"],
	/** fetch data from the table: "user_todo" */
	user_todo: Array<GraphQLTypes["user_todo"]>,
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate: GraphQLTypes["user_todo_aggregate"],
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?: GraphQLTypes["user_todo"]
};
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "todo" */
	todo: Array<GraphQLTypes["todo"]>,
	/** fetch aggregated fields from the table: "todo" */
	todo_aggregate: GraphQLTypes["todo_aggregate"],
	/** fetch data from the table: "todo" using primary key columns */
	todo_by_pk?: GraphQLTypes["todo"],
	/** fetch data from the table: "user" */
	user: Array<GraphQLTypes["user"]>,
	/** fetch aggregated fields from the table: "user" */
	user_aggregate: GraphQLTypes["user_aggregate"],
	/** fetch data from the table: "user" using primary key columns */
	user_by_pk?: GraphQLTypes["user"],
	/** fetch data from the table: "user_todo" */
	user_todo: Array<GraphQLTypes["user_todo"]>,
	/** fetch aggregated fields from the table: "user_todo" */
	user_todo_aggregate: GraphQLTypes["user_todo_aggregate"],
	/** fetch data from the table: "user_todo" using primary key columns */
	user_todo_by_pk?: GraphQLTypes["user_todo"]
};
	/** columns and relationships of "todo" */
["todo"]: {
	__typename: "todo",
	description: string,
	id: number,
	is_completed: boolean,
	/** An array relationship */
	user_todos: Array<GraphQLTypes["user_todo"]>,
	/** An aggregate relationship */
	user_todos_aggregate: GraphQLTypes["user_todo_aggregate"]
};
	/** aggregated selection of "todo" */
["todo_aggregate"]: {
	__typename: "todo_aggregate",
	aggregate?: GraphQLTypes["todo_aggregate_fields"],
	nodes: Array<GraphQLTypes["todo"]>
};
	/** aggregate fields of "todo" */
["todo_aggregate_fields"]: {
	__typename: "todo_aggregate_fields",
	avg?: GraphQLTypes["todo_avg_fields"],
	count: number,
	max?: GraphQLTypes["todo_max_fields"],
	min?: GraphQLTypes["todo_min_fields"],
	stddev?: GraphQLTypes["todo_stddev_fields"],
	stddev_pop?: GraphQLTypes["todo_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["todo_stddev_samp_fields"],
	sum?: GraphQLTypes["todo_sum_fields"],
	var_pop?: GraphQLTypes["todo_var_pop_fields"],
	var_samp?: GraphQLTypes["todo_var_samp_fields"],
	variance?: GraphQLTypes["todo_variance_fields"]
};
	/** aggregate avg on columns */
["todo_avg_fields"]: {
	__typename: "todo_avg_fields",
	id?: number
};
	/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
["todo_bool_exp"]: {
		_and?: Array<GraphQLTypes["todo_bool_exp"]>,
	_not?: GraphQLTypes["todo_bool_exp"],
	_or?: Array<GraphQLTypes["todo_bool_exp"]>,
	description?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["Int_comparison_exp"],
	is_completed?: GraphQLTypes["Boolean_comparison_exp"],
	user_todos?: GraphQLTypes["user_todo_bool_exp"]
};
	/** unique or primary key constraints on table "todo" */
["todo_constraint"]: todo_constraint;
	/** input type for incrementing numeric columns in table "todo" */
["todo_inc_input"]: {
		id?: number
};
	/** input type for inserting data into table "todo" */
["todo_insert_input"]: {
		description?: string,
	id?: number,
	is_completed?: boolean,
	user_todos?: GraphQLTypes["user_todo_arr_rel_insert_input"]
};
	/** aggregate max on columns */
["todo_max_fields"]: {
	__typename: "todo_max_fields",
	description?: string,
	id?: number
};
	/** aggregate min on columns */
["todo_min_fields"]: {
	__typename: "todo_min_fields",
	description?: string,
	id?: number
};
	/** response of any mutation on the table "todo" */
["todo_mutation_response"]: {
	__typename: "todo_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["todo"]>
};
	/** input type for inserting object relation for remote table "todo" */
["todo_obj_rel_insert_input"]: {
		data: GraphQLTypes["todo_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["todo_on_conflict"]
};
	/** on conflict condition type for table "todo" */
["todo_on_conflict"]: {
		constraint: GraphQLTypes["todo_constraint"],
	update_columns: Array<GraphQLTypes["todo_update_column"]>,
	where?: GraphQLTypes["todo_bool_exp"]
};
	/** Ordering options when selecting data from "todo". */
["todo_order_by"]: {
		description?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	is_completed?: GraphQLTypes["order_by"],
	user_todos_aggregate?: GraphQLTypes["user_todo_aggregate_order_by"]
};
	/** primary key columns input for table: todo */
["todo_pk_columns_input"]: {
		id: number
};
	/** select columns of table "todo" */
["todo_select_column"]: todo_select_column;
	/** input type for updating data in table "todo" */
["todo_set_input"]: {
		description?: string,
	id?: number,
	is_completed?: boolean
};
	/** aggregate stddev on columns */
["todo_stddev_fields"]: {
	__typename: "todo_stddev_fields",
	id?: number
};
	/** aggregate stddev_pop on columns */
["todo_stddev_pop_fields"]: {
	__typename: "todo_stddev_pop_fields",
	id?: number
};
	/** aggregate stddev_samp on columns */
["todo_stddev_samp_fields"]: {
	__typename: "todo_stddev_samp_fields",
	id?: number
};
	/** aggregate sum on columns */
["todo_sum_fields"]: {
	__typename: "todo_sum_fields",
	id?: number
};
	/** update columns of table "todo" */
["todo_update_column"]: todo_update_column;
	/** aggregate var_pop on columns */
["todo_var_pop_fields"]: {
	__typename: "todo_var_pop_fields",
	id?: number
};
	/** aggregate var_samp on columns */
["todo_var_samp_fields"]: {
	__typename: "todo_var_samp_fields",
	id?: number
};
	/** aggregate variance on columns */
["todo_variance_fields"]: {
	__typename: "todo_variance_fields",
	id?: number
};
	/** columns and relationships of "user" */
["user"]: {
	__typename: "user",
	id: number,
	/** An array relationship */
	user_todos: Array<GraphQLTypes["user_todo"]>,
	/** An aggregate relationship */
	user_todos_aggregate: GraphQLTypes["user_todo_aggregate"],
	username: string
};
	/** aggregated selection of "user" */
["user_aggregate"]: {
	__typename: "user_aggregate",
	aggregate?: GraphQLTypes["user_aggregate_fields"],
	nodes: Array<GraphQLTypes["user"]>
};
	/** aggregate fields of "user" */
["user_aggregate_fields"]: {
	__typename: "user_aggregate_fields",
	avg?: GraphQLTypes["user_avg_fields"],
	count: number,
	max?: GraphQLTypes["user_max_fields"],
	min?: GraphQLTypes["user_min_fields"],
	stddev?: GraphQLTypes["user_stddev_fields"],
	stddev_pop?: GraphQLTypes["user_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["user_stddev_samp_fields"],
	sum?: GraphQLTypes["user_sum_fields"],
	var_pop?: GraphQLTypes["user_var_pop_fields"],
	var_samp?: GraphQLTypes["user_var_samp_fields"],
	variance?: GraphQLTypes["user_variance_fields"]
};
	/** aggregate avg on columns */
["user_avg_fields"]: {
	__typename: "user_avg_fields",
	id?: number
};
	/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
["user_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_bool_exp"]>,
	_not?: GraphQLTypes["user_bool_exp"],
	_or?: Array<GraphQLTypes["user_bool_exp"]>,
	id?: GraphQLTypes["Int_comparison_exp"],
	user_todos?: GraphQLTypes["user_todo_bool_exp"],
	username?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "user" */
["user_constraint"]: user_constraint;
	/** input type for incrementing numeric columns in table "user" */
["user_inc_input"]: {
		id?: number
};
	/** input type for inserting data into table "user" */
["user_insert_input"]: {
		id?: number,
	user_todos?: GraphQLTypes["user_todo_arr_rel_insert_input"],
	username?: string
};
	/** aggregate max on columns */
["user_max_fields"]: {
	__typename: "user_max_fields",
	id?: number,
	username?: string
};
	/** aggregate min on columns */
["user_min_fields"]: {
	__typename: "user_min_fields",
	id?: number,
	username?: string
};
	/** response of any mutation on the table "user" */
["user_mutation_response"]: {
	__typename: "user_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user"]>
};
	/** input type for inserting object relation for remote table "user" */
["user_obj_rel_insert_input"]: {
		data: GraphQLTypes["user_insert_input"],
	/** on conflict condition */
	on_conflict?: GraphQLTypes["user_on_conflict"]
};
	/** on conflict condition type for table "user" */
["user_on_conflict"]: {
		constraint: GraphQLTypes["user_constraint"],
	update_columns: Array<GraphQLTypes["user_update_column"]>,
	where?: GraphQLTypes["user_bool_exp"]
};
	/** Ordering options when selecting data from "user". */
["user_order_by"]: {
		id?: GraphQLTypes["order_by"],
	user_todos_aggregate?: GraphQLTypes["user_todo_aggregate_order_by"],
	username?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: user */
["user_pk_columns_input"]: {
		id: number
};
	/** select columns of table "user" */
["user_select_column"]: user_select_column;
	/** input type for updating data in table "user" */
["user_set_input"]: {
		id?: number,
	username?: string
};
	/** aggregate stddev on columns */
["user_stddev_fields"]: {
	__typename: "user_stddev_fields",
	id?: number
};
	/** aggregate stddev_pop on columns */
["user_stddev_pop_fields"]: {
	__typename: "user_stddev_pop_fields",
	id?: number
};
	/** aggregate stddev_samp on columns */
["user_stddev_samp_fields"]: {
	__typename: "user_stddev_samp_fields",
	id?: number
};
	/** aggregate sum on columns */
["user_sum_fields"]: {
	__typename: "user_sum_fields",
	id?: number
};
	/** columns and relationships of "user_todo" */
["user_todo"]: {
	__typename: "user_todo",
	/** An object relationship */
	todo: GraphQLTypes["todo"],
	todo_id: number,
	/** An object relationship */
	user: GraphQLTypes["user"],
	user_id: number
};
	/** aggregated selection of "user_todo" */
["user_todo_aggregate"]: {
	__typename: "user_todo_aggregate",
	aggregate?: GraphQLTypes["user_todo_aggregate_fields"],
	nodes: Array<GraphQLTypes["user_todo"]>
};
	/** aggregate fields of "user_todo" */
["user_todo_aggregate_fields"]: {
	__typename: "user_todo_aggregate_fields",
	avg?: GraphQLTypes["user_todo_avg_fields"],
	count: number,
	max?: GraphQLTypes["user_todo_max_fields"],
	min?: GraphQLTypes["user_todo_min_fields"],
	stddev?: GraphQLTypes["user_todo_stddev_fields"],
	stddev_pop?: GraphQLTypes["user_todo_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["user_todo_stddev_samp_fields"],
	sum?: GraphQLTypes["user_todo_sum_fields"],
	var_pop?: GraphQLTypes["user_todo_var_pop_fields"],
	var_samp?: GraphQLTypes["user_todo_var_samp_fields"],
	variance?: GraphQLTypes["user_todo_variance_fields"]
};
	/** order by aggregate values of table "user_todo" */
["user_todo_aggregate_order_by"]: {
		avg?: GraphQLTypes["user_todo_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["user_todo_max_order_by"],
	min?: GraphQLTypes["user_todo_min_order_by"],
	stddev?: GraphQLTypes["user_todo_stddev_order_by"],
	stddev_pop?: GraphQLTypes["user_todo_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["user_todo_stddev_samp_order_by"],
	sum?: GraphQLTypes["user_todo_sum_order_by"],
	var_pop?: GraphQLTypes["user_todo_var_pop_order_by"],
	var_samp?: GraphQLTypes["user_todo_var_samp_order_by"],
	variance?: GraphQLTypes["user_todo_variance_order_by"]
};
	/** input type for inserting array relation for remote table "user_todo" */
["user_todo_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["user_todo_insert_input"]>,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["user_todo_on_conflict"]
};
	/** aggregate avg on columns */
["user_todo_avg_fields"]: {
	__typename: "user_todo_avg_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by avg() on columns of table "user_todo" */
["user_todo_avg_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "user_todo". All fields are combined with a logical 'AND'. */
["user_todo_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_todo_bool_exp"]>,
	_not?: GraphQLTypes["user_todo_bool_exp"],
	_or?: Array<GraphQLTypes["user_todo_bool_exp"]>,
	todo?: GraphQLTypes["todo_bool_exp"],
	todo_id?: GraphQLTypes["Int_comparison_exp"],
	user?: GraphQLTypes["user_bool_exp"],
	user_id?: GraphQLTypes["Int_comparison_exp"]
};
	/** unique or primary key constraints on table "user_todo" */
["user_todo_constraint"]: user_todo_constraint;
	/** input type for incrementing numeric columns in table "user_todo" */
["user_todo_inc_input"]: {
		todo_id?: number,
	user_id?: number
};
	/** input type for inserting data into table "user_todo" */
["user_todo_insert_input"]: {
		todo?: GraphQLTypes["todo_obj_rel_insert_input"],
	todo_id?: number,
	user?: GraphQLTypes["user_obj_rel_insert_input"],
	user_id?: number
};
	/** aggregate max on columns */
["user_todo_max_fields"]: {
	__typename: "user_todo_max_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by max() on columns of table "user_todo" */
["user_todo_max_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["user_todo_min_fields"]: {
	__typename: "user_todo_min_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by min() on columns of table "user_todo" */
["user_todo_min_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "user_todo" */
["user_todo_mutation_response"]: {
	__typename: "user_todo_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user_todo"]>
};
	/** on conflict condition type for table "user_todo" */
["user_todo_on_conflict"]: {
		constraint: GraphQLTypes["user_todo_constraint"],
	update_columns: Array<GraphQLTypes["user_todo_update_column"]>,
	where?: GraphQLTypes["user_todo_bool_exp"]
};
	/** Ordering options when selecting data from "user_todo". */
["user_todo_order_by"]: {
		todo?: GraphQLTypes["todo_order_by"],
	todo_id?: GraphQLTypes["order_by"],
	user?: GraphQLTypes["user_order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: user_todo */
["user_todo_pk_columns_input"]: {
		todo_id: number,
	user_id: number
};
	/** select columns of table "user_todo" */
["user_todo_select_column"]: user_todo_select_column;
	/** input type for updating data in table "user_todo" */
["user_todo_set_input"]: {
		todo_id?: number,
	user_id?: number
};
	/** aggregate stddev on columns */
["user_todo_stddev_fields"]: {
	__typename: "user_todo_stddev_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by stddev() on columns of table "user_todo" */
["user_todo_stddev_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["user_todo_stddev_pop_fields"]: {
	__typename: "user_todo_stddev_pop_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by stddev_pop() on columns of table "user_todo" */
["user_todo_stddev_pop_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["user_todo_stddev_samp_fields"]: {
	__typename: "user_todo_stddev_samp_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by stddev_samp() on columns of table "user_todo" */
["user_todo_stddev_samp_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["user_todo_sum_fields"]: {
	__typename: "user_todo_sum_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by sum() on columns of table "user_todo" */
["user_todo_sum_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** update columns of table "user_todo" */
["user_todo_update_column"]: user_todo_update_column;
	/** aggregate var_pop on columns */
["user_todo_var_pop_fields"]: {
	__typename: "user_todo_var_pop_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by var_pop() on columns of table "user_todo" */
["user_todo_var_pop_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["user_todo_var_samp_fields"]: {
	__typename: "user_todo_var_samp_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by var_samp() on columns of table "user_todo" */
["user_todo_var_samp_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["user_todo_variance_fields"]: {
	__typename: "user_todo_variance_fields",
	todo_id?: number,
	user_id?: number
};
	/** order by variance() on columns of table "user_todo" */
["user_todo_variance_order_by"]: {
		todo_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** update columns of table "user" */
["user_update_column"]: user_update_column;
	/** aggregate var_pop on columns */
["user_var_pop_fields"]: {
	__typename: "user_var_pop_fields",
	id?: number
};
	/** aggregate var_samp on columns */
["user_var_samp_fields"]: {
	__typename: "user_var_samp_fields",
	id?: number
};
	/** aggregate variance on columns */
["user_variance_fields"]: {
	__typename: "user_variance_fields",
	id?: number
}
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
/** unique or primary key constraints on table "todo" */
export enum todo_constraint {
	todo_pkey = "todo_pkey"
}
/** select columns of table "todo" */
export enum todo_select_column {
	description = "description",
	id = "id",
	is_completed = "is_completed"
}
/** update columns of table "todo" */
export enum todo_update_column {
	description = "description",
	id = "id",
	is_completed = "is_completed"
}
/** unique or primary key constraints on table "user" */
export enum user_constraint {
	user_pkey = "user_pkey",
	user_username_key = "user_username_key"
}
/** select columns of table "user" */
export enum user_select_column {
	id = "id",
	username = "username"
}
/** unique or primary key constraints on table "user_todo" */
export enum user_todo_constraint {
	user_todo_pkey = "user_todo_pkey"
}
/** select columns of table "user_todo" */
export enum user_todo_select_column {
	todo_id = "todo_id",
	user_id = "user_id"
}
/** update columns of table "user_todo" */
export enum user_todo_update_column {
	todo_id = "todo_id",
	user_id = "user_id"
}
/** update columns of table "user" */
export enum user_update_column {
	id = "id",
	username = "username"
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

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };



export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void;
  error: (e: { data?: InputType<T, Z>; message?: string }) => void;
  open: () => void;
};
export type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (
  query: string,
  variables?: Record<string, any>,
) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



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


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o as any, variables)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o as any, variables)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


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


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;


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

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
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
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
    variables: Record<string, any> = {},
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'query_root'),
mutation: fullChainConstructor(fn,'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'subscription_root')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'query_root'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'subscription_root')
});
export const Zeus = {
  query: (o:ValueTypes["query_root"]) => queryConstruct('query', 'query_root')(o),
mutation: (o:ValueTypes["mutation_root"]) => queryConstruct('mutation', 'mutation_root')(o),
subscription: (o:ValueTypes["subscription_root"]) => queryConstruct('subscription', 'subscription_root')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["query_root"],
  GraphQLTypes["query_root"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["mutation_root"],
  GraphQLTypes["mutation_root"]
>,
subscription: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["subscription_root"],
  GraphQLTypes["subscription_root"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('https://typescript-gql-workshop.hasura.app/v1/graphql')