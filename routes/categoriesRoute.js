import express from 'express';
import { getcategories, savecategorie, showcategorieById, updatecategorieById, deletecategorieById } from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/', getcategories);
router.post('/', savecategorie);
router.put('/:id', updatecategorieById);
router.delete('/:id', deletecategorieById);
router.get('/:id', showcategorieById);

export default router;