INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ragnar", "Lothbrok", 1),
       ("Floki", "Vilgerdarson", 2, 1),
       ("Frode", "Alfson", 3, 2),
       ("Gorm", "Gulbrandsen", 3, 2),
       ("Halfdan", "Halvorsen", 4, 2),
       ("Bjorn", "Ragnarson", 5, 1),
       ("Harald", "Varangr", 6, 6),
       ("Knud", "Helvig", 6, 6),
       ("Sten", "Vilulf", 6, 6),
       ("Leif", "Erikson", 7, 1),
       ("Skarde", "Haugen", 8, 10),
       ("Torsten", "Westergaard", 9, 10),
       ("Ulf", "Helvig", 10, 10);

INSERT INTO department (dep_name)
VALUES ("Leadership"),
       ("Sailing"),
       ("Viking (verb)"),
       ("Development");

INSERT INTO role (title, salary, dep_id)
VALUES ("Jarl", 1000, 1),
       ("Ship Head", 800, 2),
       ("Steersman", 500, 2),
       ("Holumenn (sailor)", 400, 2),
       ("Foringi (leader)", 800, 3),
       ("Housecarl", 500, 3),
       ("Lead Developer", 800, 4),
       ("Stonemason", 600, 4),
       ("Carpenter", 500, 4),
       ("Interior Decorator", 400, 4);

