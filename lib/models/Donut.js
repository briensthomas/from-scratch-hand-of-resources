const pool = require('../utils/pool');

class Donut {
  id;
  name;
  ingredients;
    
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.ingredients = row.ingredients;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM donuts;
    `);
    return rows.map((row) => new Donut(row));
  }
}

module.exports = { Donut };
