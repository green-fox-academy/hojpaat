
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |


For information about MySQL products and services, visit:
   http://www.mysql.com/
For developer information, including the MySQL Reference Manual, visit:
   http://dev.mysql.com/
CREATE TABLE persons (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL);

INSERT INTO persons(name) VALUES ("TOM");
INSERT INTO persons(name) VALUES ("Anne");
INSERT INTO persons(name) VALUES ("Pete");
UPDATE persons SET name = "Tom" WHERE name = "TOM";


mysql> CREATE TABLE tasks (
    taskID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(30) NOT NULL
    );
INSERT INTO tasks(task) VALUES ("Clean bathroom");
Query OK, 1 row affected (0.08 sec)

INSERT INTO tasks(task) VALUES ("Clean kitchen");
Query OK, 1 row affected (0.12 sec)

INSERT INTO tasks(task) VALUES ("Cooking");
Query OK, 1 row affected (0.11 sec)

INSERT INTO tasks(task) VALUES ("Feed the dog");
Query OK, 1 row affected (0.12 sec)



CREATE TABLE chores (
    day CHAR(2) NOT NULL,
    taskID INT NOT NULL,
    personID INT NOT NULL,
    done BOOLEAN DEFAULT FALSE
    );
INSERT INTO chores(day, taskID, personID) VALUES ("MO", 2, 2);
INSERT INTO chores(day, taskID, personID) VALUES ("WE", 2, 3);
INSERT INTO chores(day, taskID, personID) VALUES ("TU", 3, 1);
SELECT day, name, task, done FROM persons LEFT JOIN chores ON persons.id = chores.personID
    LEFT JOIN tasks ON chores.taskID = tasks.taskID;

UPDATE chores SET done = TRUE WHERE personID = 1;
SELECT day, name, task, done FROM persons LEFT JOIN chores ON persons.id = chores.personID
    LEFT JOIN tasks ON chores.taskID = tasks.taskID
    ORDER BY done;
DELETE FROM chores WHERE done = TRUE;
