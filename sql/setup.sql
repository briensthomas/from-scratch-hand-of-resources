-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS donuts;
DROP TABLE IF EXISTS coffee;
DROP TABLE IF EXISTS energy_drinks;
DROP TABLE IF EXISTS smoothie_ingredients;
DROP TABLE IF EXISTS oatmeal_bar;

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

CREATE TABLE energy_drinks (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR,
    flavor VARCHAR,
    rating INT
);
INSERT INTO energy_drinks (
    name,
    flavor,
    rating
)
VALUES
('Monster Energy Drink', 'Original', '5'),
('Rockstar', 'Original', '5'),
('Red Bull', 'Original', '5'),
('Monster Energy Drink', 'Gronkster', '10'),
('Red Line', 'Regular', '10');

CREATE TABLE smoothie_ingredients (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR,
    amount VARCHAR
);
INSERT INTO smoothie_ingredients (
    name,
    amount
)
VALUES 
('Old Fashioned Oats', '1/4 Cup'),
('Whey Protein (Vanilla)', '1 Scoop'),
('Yogurt (Strawberry, Low-Fat', '1/2 Cup'),
('Raspberries (Frozen)', '1/2 Cup'),
('Blueberries (Frozen)', '1/2 Cup'),
('Oat Milk', '~4 Oz');

CREATE TABLE oatmeal_bar (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    ingredient VARCHAR,
    amount VARCHAR
);
INSERT INTO oatmeal_bar (
    ingredient,
    amount
)
VALUES
('Bananas (Mashed)', '3-4 Bananas'),
('Maple Syrup', '1/4 Cup'),
('Peanut Butter', '1/2 Cup'),
('Old-Fashioned Oats', '2 1/2 Cups');