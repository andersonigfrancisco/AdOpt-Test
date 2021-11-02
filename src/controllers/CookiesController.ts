
import {Request,Response} from 'express';
import {CookiesServices} from '../services/CookiesServices'


class CookiesController
{
  async handle(request:Request,response:Response)
  {
    const createcookiesService = new CookiesServices();

    const {name,Flavor_id,Format_id,descrition} = request.body;
    
    const cookies = await createcookiesService.Create({name,Flavor_id,Format_id,descrition});
    
    return response.json(cookies);
  }

  async delete(request:Request,response:Response)
  {
    const createcookiesService = new CookiesServices();

    const {id} = request.body;
    
    const cookies = await createcookiesService.delete(id);
    
    return response.json(cookies);
  }

  async list(request:Request,response:Response)
  {
    const createcookiesService = new CookiesServices();

    const cookies = await createcookiesService.list();

    return response.json(cookies);
  }

  async update(request:Request,response:Response)
  {
    const createcookiesService = new CookiesServices();

    const {id,name,Flavor_id,Format_id,descrition} = request.body;
    
    const Cookies = await createcookiesService.update(id,{name,Flavor_id,Format_id,descrition});
    
    return response.json(Cookies);
  }
}

export {CookiesController};