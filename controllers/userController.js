import db from "../config/db.js";

// 1. Menampilkan data user
// SELECT * FROM users
export const getUsers = (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json(results);
  });
};


// 2. Menyimpan data user
// INSERT INTO users (nama, email, password) VALUES (?, ?, ?)
export const saveUser = (req, res) => {
  const { nama, email, password } = req.body;
  db.query(
    "INSERT INTO user (nama, email, password) VALUES (?, ?, ?)",
    [nama, email, password],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil disimpan"});
    }
  );
};


// 3. Menampilkan data berdasarkan ID
// SELECT * FROM user WHERE ID=?
export const showUserById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM user WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
    
        if (results.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }

      res.json(results[0]);
    }
  );
};


// 4. Mengupdate data berdasarkan ID
// UPDATE users SET nama=?, email=?, password=? WHERE ID=?
export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { nama, email, password } = req.body;
  db.query(
    "UPDATE user SET nama=?, email=?, password=? WHERE id=?",
    [nama, email, password, id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil diupdate"});
    }
  );
};


// 5. Menghapus data berdasarkan ID
// DELETE FROM user WHERE id=?
export const deleteUserById = (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM user WHERE id=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil dihapus"});
    }
  );
};