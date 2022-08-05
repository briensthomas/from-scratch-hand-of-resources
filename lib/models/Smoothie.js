const pool = require('../utils/pool');

class Smoothie {
  id;
  name;
  amount;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.amount = row.amount;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from smoothie_ingredients;'
    );
    return rows.map((row) => new Smoothie(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM smoothie_ingredients
        WHERE id = $1;`,
      [id]
    );
    return new Smoothie(rows[0]);
  }
}

module.exports = { Smoothie };
