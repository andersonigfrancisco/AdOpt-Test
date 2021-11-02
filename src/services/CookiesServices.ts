import {getCustomRepository} from 'typeorm';
import {CookiesRepositories} from '../repositories/CookiesRepositories';

interface IUFlavorRequest
{
  name: string;
  Flavor_id: string;
  Format_id: string;
  descrition: string;
}


class CookiesServices
{
  async Create({name,Flavor_id,Format_id,descrition}:IUFlavorRequest)
  {
    
    const CookiesRepository = getCustomRepository(CookiesRepositories);
    
    
    if(!name)
    {
      throw new Error("name incorrect")
    }
    
    const CookiesAlreadyExists = await CookiesRepository.findOne({name});

    if(CookiesAlreadyExists)
    {
      throw new Error("Cookie already exists")
    }

    const Cookies =  CookiesRepository.create({name,Flavor_id,Format_id,descrition});
    const sms = await CookiesRepository.save(Cookies);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Cookies;
  }


  async list()
  {
    const CookiesRepository = getCustomRepository(CookiesRepositories);

    const Cookies = await CookiesRepository.find({
      relations:["format","flavor"]
    });

    if(!Cookies)
      throw new Error("Cookies does not exists");
      
    return  Cookies;
  }

  async delete(id:string)
  {
    const CookiesRepository = getCustomRepository(CookiesRepositories);

    const CookiesAlreadyExists = await CookiesRepository.findOne({id,});

    if(!CookiesAlreadyExists)
    {
      throw new Error("Cookies not exists")
    }

    await CookiesRepository.delete(id);

      
    return  CookiesAlreadyExists;
  }

  async update(prop:string,{name,Flavor_id,Format_id,descrition}:IUFlavorRequest)
  {
    
    const CookiesRepository = getCustomRepository(CookiesRepositories);
    
    const Cookies =  CookiesRepository.update(prop,{name,Flavor_id,Format_id,descrition});

    if(!Cookies)
    {
      throw new Error("add error")
    }  
    return Cookies;
  }
}

export {CookiesServices}