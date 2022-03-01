import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService";
import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController{
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .delete('', this.remove)
        
    }


    async getAll(req, res, next) {
        try {
            const houses = await housesService.getAll(req.query)
            return res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const house = await housesService.create(req.body)
            return res.send(house)
            } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const userId = req.userInfo.id
            const houseId = req.params.id
            await carsService.remove(houseId, userId)
            return res.send('deleted house')
        } catch (error) {
            next(error)
        }
    }
}