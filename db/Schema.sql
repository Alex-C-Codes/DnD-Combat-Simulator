// Use the "monsters" database
USE monsters;

// Import the JSON data into the "monsters" table
LOAD DATA InFILE '/path/to/monsters.json'
INTO TABLE monsters
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;