
import {Request,Response} from 'express';
import {FormatServices} from '../services/FormatServices'


class FormatController
{
  async handle(request:Request,response:Response)
  {
    const createFormatService = new FormatServices();

    const {types} = request.body;
    
    const Format = await createFormatService.Create({types});
    
    return response.json(Format);
  }

  async delete(request:Request,response:Response)
  {
    const createFormatService = new FormatServices();

    const {id} = request.body;
    
    const Format = await createFormatService.delete(id);
    
    return response.json(Format);
  }

  async list(request:Request,response:Response)
  {
    const createFormatService = new FormatServices();

    const Format = await createFormatService.list();

    return response.json(Format);
  }

  async update(request:Request,response:Response)
  {
    const createFormatService = new FormatServices();

    const {id,types} = request.body;
    
    const Format = await createFormatService.update(id,{types});
    
    return response.json(Format);
  }
}

export {FormatController};