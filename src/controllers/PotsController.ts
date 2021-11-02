
import {Request,Response} from 'express';
import {PotsServices} from '../services/PotsServices'


class PotsController
{
  async handle(request:Request,response:Response)
  {
    const createPotsService = new PotsServices();

    const {name,quantity,Cookie_id,descrition} = request.body;
    
    const pots = await createPotsService.Create({name,quantity,Cookie_id,descrition});
    
    return response.json(pots);
  }

  async delete(request:Request,response:Response)
  {
    const createPotsService = new PotsServices();

    const {id} = request.body;
    
    const pots = await createPotsService.delete(id);
    
    return response.json(pots);
  }

  async list(request:Request,response:Response)
  {
    const createPotsService = new PotsServices();

    const pots = await createPotsService.list();

    return response.json(pots);
  }

  async update(request:Request,response:Response)
  {
    const createPotsService = new PotsServices();

    const {id,name,quantity,Cookie_id,descrition} = request.body;
    
    const Pots = await createPotsService.update(id,{name,quantity,Cookie_id,descrition});
    
    return response.json(Pots);
  }
}

export {PotsController};