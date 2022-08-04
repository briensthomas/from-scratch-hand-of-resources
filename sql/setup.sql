-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS donuts;
DROP TABLE IF EXISTS coffee;

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
('Cheeseburger', 'Burger Patty, Cheddar, Special Sauce, House Made Dill Pickle');

CREATE TABLE coffee (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR,
    grind_type VARCHAR,
    time VARCHAR
);

INSERT INTO coffee (
    name,
    grind_type,
    time
)
VALUES
('Pour Over - Coffee Cone', 'Med. Fine to Coarse', '2-3 Minutes'),
('Pour Over - Chemex', 'Medium to Coarse', '5-10 Minutes'),
('French Press', 'Coarse', '5 Minutes'),
('AeroPress', 'Fine to Medium', '2-3 Minutes'),
('Moka Pot', 'Fine to Med. Coarse', '5 Minutes');