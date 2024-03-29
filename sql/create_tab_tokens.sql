CREATE TABLE airport2_tokens(
    id INT NOT NULL AUTO_INCREMENT,
    userid INT NOT NULL,
    logged DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastaction DATETIME DEFAULT CURRENT_TIMESTAMP,
    token VARCHAR(40) NOT NULL,
    messages INT DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY(userid) REFERENCES airport2_users(id)
);
