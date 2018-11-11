import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data:['test', 123]});
})

export default router;