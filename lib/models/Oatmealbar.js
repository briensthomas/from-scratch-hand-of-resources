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
}

module.exports = { Oatmealbar };
