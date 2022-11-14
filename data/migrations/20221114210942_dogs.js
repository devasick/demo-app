/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dogs", (tbl) => {
    tbl.increments();
    tbl.varchar("name", 255).notNullable();
    tbl.varchar("breed").notNullable();
    tbl.integer("age").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dogs");
};
