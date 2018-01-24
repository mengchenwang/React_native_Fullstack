import express, { Router } from 'express';
import { index, singleContact, updateContact } from './controllers/data';

const router = Router();

router.route('/contacts')
  .get(index);

router.route('/:id')
  .get(singleContact)
  .put(updateContact);

export default router;
