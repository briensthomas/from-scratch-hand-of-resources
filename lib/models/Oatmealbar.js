const pool = require('../utils/pool');

class Oatmealbar {
  id;
  ingredient;
  amount;

  constructor(row) {
    this.id = row.id;
    this.ingredient = row.ingredient;
    this.amount = row.amount;
  }
 
  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM oatmeal_bar;'
    );
    return rows.map((row) => new Oatmealbar(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from oatmeal_bar
      WHERE id = $1;`,
      [id]
    );
    return new Oatmealbar(rows[0]);
  }

  static async insert({ ingredient, amount }) {
    const { rows } = await pool.query(
      `INSERT INTO oatmeal_bar (ingredient, amount)
      VALUES ($1, $2)
      RETURNING *;`,
      [ingredient, amount]
    );
    return new Oatmealbar(rows[0]);
  }
  
}

module.exports = { Oatmealbar };
