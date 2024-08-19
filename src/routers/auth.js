// src/routers/auth.js
import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema
} from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import {registerUserController, loginUserController, logoutUserController
  refreshUserSessionController, requestResetEmailController
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

router.post(
  '/request-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

router.post('/reset-password');



export default router;
