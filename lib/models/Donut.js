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
    const { rows } = await pool.query(
      'SELECT * FROM donuts;'
    );
    return rows.map((row) => new Donut(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM donuts
        WHERE id = $1;`,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Donut(rows[0]);
  }
  
  static async insert({ name, ingredients }) {
    const { rows } = await pool.query(
      `INSERT INTO donuts (name, ingredients)
        VALUES ($1, $2)
        RETURNING *;`,
      [name, ingredients]
    );
    return new Donut(rows[0]);
  }

  static async updateById(id, update) {
    const donut = await Donut.getById(id);
    if (!donut) return null;
    const updatedDonut = { ...donut, ...update };

    const { rows } = await pool.query(
      `UPDATE donuts
        SET name = $2, ingredients = $3
        WHERE id = $1
        RETURNING *;`,
      [id,
        updatedDonut.name,
        updatedDonut.ingredients]
    );
    return new Donut(rows[0]);
  }
  
  static async deleteDonut(id) {
    const { rows } = await pool.query(
      `DELETE FROM donuts
        WHERE id = $1
        RETURNING *;`,
      [id]
    );
    return new Donut(rows[0]);
  }
}

module.exports = { Donut };
