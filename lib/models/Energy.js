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
}

module.exports = { Energy };
