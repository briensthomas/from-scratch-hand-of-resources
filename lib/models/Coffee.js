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


}

module.exports = { Coffee };
