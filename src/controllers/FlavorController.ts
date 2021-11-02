
import {Request,Response} from 'express';
import {FlavorServices} from '../services/FlavorServices'


class FlavorController
{
  async handle(request:Request,response:Response)
  {
    const createFlavorService = new FlavorServices();

    const {name} = request.body;
    
    const Flavor = await createFlavorService.Create({name});
    
    return response.json(Flavor);
  }

  async delete(request:Request,response:Response)
  {
    const createFlavorService = new FlavorServices();

    const {id} = request.body;
    
    const Flavor = await createFlavorService.delete(id);
    
    return response.json(Flavor);
  }

  async list(request:Request,response:Response)
  {
    const createFlavorService = new FlavorServices();

    const Flavor = await createFlavorService.list();

    return response.json(Flavor);
  }

  async update(request:Request,response:Response)
  {
    const createFlavorService = new FlavorServices();

    const {id,name} = request.body;
    
    const Flavor = await createFlavorService.update(id,{name});
    
    return response.json(Flavor);
  }
}

export {FlavorController};