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

  static async insert({ name, amount }) {
    const { rows } = await pool.query(
      `INSERT INTO smoothie_ingredients (name, amount)
        VALUES ($1, $2)
        RETURNING *;`,
      [name, amount]
    );
    return new Smoothie(rows[0]);
  }

  static async update(id, update) {
    const smoothie = await Smoothie.getById(id);
    if (!smoothie) return null;
    const updatedSmoothie = { ...smoothie, ...update };

    const { rows } = await pool.query(
      `UPDATE smoothie_ingredients
        SET name = $2, amount = $3
        WHERE id = $1
        RETURNING *;`,
      [id,
        updatedSmoothie.name,
        updatedSmoothie.amount]
    );
    return new Smoothie(rows[0]);
  }


}

module.exports = { Smoothie };
