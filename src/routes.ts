import {Router } from 'express';

import {UsersController} from './controllers/UsersController';
import {FormatController} from './controllers/FormatController';
import {FlavorController} from './controllers/FlavorController';
import {CookiesController} from './controllers/CookiesController';
import {PotsController} from './controllers/PotsController';
import {AuthenticateUserController} from './controllers/AuthenticateUserController';

const router = Router();

const userController = new UsersController();
const authenticateUserController = new AuthenticateUserController();
const formatController = new FormatController();
const flavorController = new FlavorController();

const cookiesController = new CookiesController();
const potsController = new PotsController();



router.get("/list-user",userController.list);
router.post("/create-user",userController.handle);
router.delete("/delete-user",userController.delete);
router.delete("/update-user",userController.update);
router.post("/login",authenticateUserController.handle)

router.get("/list-format",formatController.list);
router.post("/create-format",formatController.handle);
router.delete("/delete-format",formatController.delete);
router.put("/update-format",formatController.update);

router.get("/list-flavor",flavorController.list);
router.post("/create-flavor",flavorController.handle);
router.delete("/delete-flavor",flavorController.delete);
router.put("/update-flavor",flavorController.update);

router.get("/list-cookies",cookiesController.list);
router.post("/create-cookies",cookiesController.handle);
router.delete("/delete-cookies",cookiesController.delete);
router.put("/update-cookies",cookiesController.update);

router.get("/list-pots",potsController.list);
router.post("/create-pots",potsController.handle);
router.delete("/delete-pots",potsController.delete);
router.put("/update-pots",potsController.update);


export {router}