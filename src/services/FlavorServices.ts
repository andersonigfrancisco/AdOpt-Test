import {getCustomRepository} from 'typeorm';
import {FlavorRepositories} from '../repositories/FlavorRepositories';

interface IFlavorRequest
{
  name: string;
}


class FlavorServices
{
  async Create({name}:IFlavorRequest)
  {
    
    const FlavorRepository = getCustomRepository(FlavorRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const FlavorAlreadyExists = await FlavorRepository.findOne({name,});

    if(FlavorAlreadyExists)
    {
      throw new Error("Flavor already exists")
    }

    const Flavor =  FlavorRepository.create({name});
    const sms = await FlavorRepository.save(Flavor);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Flavor;
  }


  async list()
  {
    const userRepositories = getCustomRepository(FlavorRepositories);

    const Flavor = await userRepositories.find();

    if(!Flavor)
      throw new Error("Flavor does not exists");
      
    return  Flavor;
  }

  async delete(id:string)
  {
    const userRepositories = getCustomRepository(FlavorRepositories);

    const FlavorlreadyExists = await userRepositories.findOne({id,});

    if(!FlavorlreadyExists)
    {
      throw new Error("Flavor not exists")
    }

    await userRepositories.delete(id);

      
    return  FlavorlreadyExists;
  }

  async update(prop:string,{name}:IFlavorRequest)
  {
    
    const FlavorRepository = getCustomRepository(FlavorRepositories);
    
    const Flavor =  FlavorRepository.update(prop,{name});

    if(!Flavor)
    {
      throw new Error("add error")
    }  
    return Flavor;
  }
}

export {FlavorServices}