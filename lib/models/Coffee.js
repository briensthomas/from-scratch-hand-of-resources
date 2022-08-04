const pool = require('../utils/pool');

class Coffee {
  id;
  name;
  grind_type;
  time;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.grind_type = row.grind_type;
    this.time = row.time;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM coffee;'
    );
    return rows.map((row) => new Coffee(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM coffee
        WHERE id = $1;`,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Coffee(rows[0]);
  }

  static async insert({ name, grind_type, time }) {
    const { rows } = await pool.query(
      `INSERT INTO coffee
        (name, grind_type, time)
        VALUES ($1, $2, $3)
        RETURNING *;`,
      [name, grind_type, time]
    );
    return new Coffee(rows[0]);
  }

  static async updateById(id, update) {
    const coffee = await Coffee.getById(id);
    if (!coffee) return null;
    const updatedCoffee = { ...coffee, ...update };

    const { rows } = await pool.query(
      `UPDATE coffee
        SET name = $2, grind_type = $3, time = $4
        WHERE id = $1
        RETURNING *;`,
      [id,
        updatedCoffee.name,
        updatedCoffee.grind_type,
        updatedCoffee.time]
    );
    return new Coffee(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM coffee
        WHERE id = $1
        RETURNING *;`,
      [id]
    );
    return new Coffee(rows[0]);
  }
}

module.exports = { Coffee };
