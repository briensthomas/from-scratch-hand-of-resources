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
}

module.exports = { Oatmealbar };
