import {Router,Request,Response} from 'express';
export const router = Router();
router.get('/mensajes',(req: Request, res:Response)=>{
    res.json({
        ok : true,
        msg : "Todo está bien"
    });
});
router.post('/mensajes',(req: Request,res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        msg: "POST Listo",
        cuerpo,
        de
    });
});
router.post('/mensajes/:id',(req: Request,res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const para = req.params.id;
    res.json({
        ok: true,
        msg: "POST Listo",
        cuerpo,
        de,
        para
    });
});