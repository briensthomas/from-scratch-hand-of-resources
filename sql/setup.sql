-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS donuts;
-- DROP TABLE IF EXISTS sports;
-- DROP TABLE IF EXISTS books;
-- DROP TABLE IF EXISTS movies;
-- DROP TABLE IF EXISTS dogs;

CREATE TABLE donuts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    ingredients VARCHAR
);

INSERT INTO donuts (
    name,
    ingredients
)
VALUES
('Tiramisu Filled', 'Coffee Glaze, Cream Filling, Cocoa Powder'),
('French Toast', 'French Toast, Vermont Maple, Powdered Sugar'),
('Portland Fog', 'Earl Grey Glaze, Fresh Whip, Vanilla Bean'),
('Blackberry, Mint, and Cucumber', 'Blackberry Mint, Cucumber Glaze, Mint Leaf'),
('Lemon Poppy Twist', 'Lemon Glaze, Lemon Zest, Poppy Seeds'),
('Cheeseburger', 'Burger Patty, Cheddar, Special Sauce, House Made Dill Pickle')