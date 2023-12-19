import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  // host: "localhost",
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true,
});

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      return resolve(connection);
    });
  });
};

const query = async (sql, values) => {
  const connection = await getConnection();

  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, results) => {
      if (err) {
        connection.release();
        reject(err);
      } else {
        connection.release();
        resolve(results);
      }
    });
  });
};

const dbService = {
  query,
};

export default dbService;
