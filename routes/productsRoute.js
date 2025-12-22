import express from 'express';
import { getProduct, showProductById, updateProductById,deleteProductById, saveProduct } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', saveProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);
router.get('/:id', showProductById);

export default router;