import db from "../config/db.js";


export const getProduct = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json(results);
  });
};


export const saveProduct = (req, res) => {
  const { id_category, nama, price } = req.body;
  db.query(
    "INSERT INTO products (id_category, nama, price) VALUES (?, ?, ?)",
    [id_category, nama, price],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil disimpan"});
    }
  );
};


export const showProductById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM products WHERE id_products= ?",
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



export const updateProductById = (req, res) => {
  const { id } = req.params;
  const { id_category, nama, price } = req.body;
  db.query(
    "UPDATE products SET id_category=?, nama=?, price=? WHERE id_products=?",
    [id_category, nama, price, id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil diupdate"});
    }
  );
};



export const deleteProductById = (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM products WHERE id_products=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Data berhasil dihapus"});
    }
  );
};
