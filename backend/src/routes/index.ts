import { Router } from 'express';
import authRoutes from '../modules/auth/auth.route';

const router = Router();

router.use('/auth', authRoutes);

router.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

export default router;
