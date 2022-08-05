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

  static async insert({ name, flavor, rating }) {
    const { rows } = await pool.query(
      `INSERT INTO energy_drinks
        (name, flavor, rating)
        VALUES ($1, $2, $3)
        RETURNING *;`,
      [name, flavor, rating]
    );
    return new Energy(rows[0]);
  }

  static async updateById(id, update) {
    const energy = await Energy.getById(id);
    if (!energy) return null;
    const updatedEnergy = { ...energy, ...update };
    
    const { rows } = await pool.query(
      `UPDATE energy_drinks
        SET name = $2, flavor = $3, rating = $4
        WHERE id = $1
        RETURNING *;`,
      [id,
        updatedEnergy.name,
        updatedEnergy.flavor,
        updatedEnergy.rating]
    );
    return new Energy(rows[0]);
  }
}

module.exports = { Energy };
