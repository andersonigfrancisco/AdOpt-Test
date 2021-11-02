import {getCustomRepository} from 'typeorm';
import {PotsRepositories} from '../repositories/PotsRepositories';

interface IUPotsRequest
{
  name: string;
  quantity: number;
  Cookie_id: string;
  descrition: string;
}


class PotsServices
{
  async Create({name,quantity,Cookie_id,descrition}:IUPotsRequest)
  {
    
    const PotsRepository = getCustomRepository(PotsRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const PotAlreadyExists = await PotsRepository.findOne({name});

    if(PotAlreadyExists)
    {
      throw new Error("Pot already exists")
    }

    const Pots =  PotsRepository.create({name,quantity,Cookie_id,descrition});
    const sms = await PotsRepository.save(Pots);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Pots;
  }


  async list()
  {
    const PotsRepository = getCustomRepository(PotsRepositories);

    const pots = await PotsRepository.find({
      relations:["cookie"]
    });

    if(!pots)
      throw new Error("Pots does not exists");
      
    return  pots;
  }

  async delete(id:string)
  {
    const PotsRepository = getCustomRepository(PotsRepositories);

    const PotsAlreadyExists = await PotsRepository.findOne({id,});

    if(!PotsAlreadyExists)
    {
      throw new Error("pots not exists")
    }

    await PotsRepository.delete(id);

      
    return  PotsAlreadyExists;
  }

  async update(prop:string,{name,quantity,Cookie_id,descrition}:IUPotsRequest)
  {
    
    const PotsRepository = getCustomRepository(PotsRepositories);
    
    const Pots =  PotsRepository.update(prop,{name,quantity,Cookie_id,descrition});

    if(!Pots)
    {
      throw new Error("add error")
    }  
    return Pots;
  }
}

export {PotsServices}