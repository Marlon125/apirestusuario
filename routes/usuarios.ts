import { Router } from "express";
import { getUsuarios, getUsuariosPorId, postUsuario, putUsuario, delUsuario } from '../controller/usuarios';


const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuariosPorId);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', delUsuario);

export default router;