import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('projects')
})

export default router;