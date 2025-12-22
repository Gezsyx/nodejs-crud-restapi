import db from "../config/db.js";


export const getcategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json(results);
  });
};




export const savecategorie = (req, res) => {
  const { nama } = req.body;
  db.query(
    "INSERT INTO categories (nama) VALUES (?)",
    [nama],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil disimpan"});
    }
  );
};




export const showcategorieById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM categories WHERE id_category= ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
    
        if (results.length === 0) {
          return res.status(404).json({ message: "categories not found" });
        }

      res.json(results[0]);
    }
  );
};




export const updatecategorieById = (req, res) => {
  const { id } = req.params;
  const { nama } = req.body;
  db.query(
    "UPDATE categories SET nama=? WHERE id_category=?",
    [nama, id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil diupdate"});
    }
  );
};




export const deletecategorieById = (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM categories WHERE id_category=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil dihapus"});
    }
  );
};