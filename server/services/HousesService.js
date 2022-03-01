import { dbContext } from "../db/DbContext"

class HousesService{
    async create(body) {
        const house = await dbContext.Houses.create(body)
        return house
    }
    async getAll(query = {}) {
        const houses = await dbContext.Houses.find(query)
        return houses
    }

    async remove(houseId, userId) {
        const house = await get
    }
    

}

export const housesService = new HousesService()