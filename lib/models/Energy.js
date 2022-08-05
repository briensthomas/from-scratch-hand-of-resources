const pool = require('../utils/pool');

class Energy {
  id;
  name;
  flavor;
  rating;
    
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.flavor = row.flavor;
    this.rating = row.rating;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM energy_drinks;'
    );
    return rows.map((row) => new Energy(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM energy_drinks
        WHERE id = $1;`,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Energy(rows[0]);
  }
}

module.exports = { Energy };
