import {getCustomRepository} from 'typeorm';
import {FormatRepositories} from '../repositories/FormatRepositories';

interface IFormatRequest
{
  types: string;
}


class FormatServices
{
  async Create({types}:IFormatRequest)
  {
    
    const FormatRepository = getCustomRepository(FormatRepositories);
    
    
    if(!types)
    {
      throw new Error("type incorrect")
    }
    
    const UserAlreadyExists = await FormatRepository.findOne({types,});

    if(UserAlreadyExists)
    {
      throw new Error("Format already exists")
    }

    const Format =  FormatRepository.create({types});
    const sms = await FormatRepository.save(Format);

    if(!sms)
    {
      throw new Error("add error")
    }  
    return Format;
  }


  async list()
  {
    const userRepositories = getCustomRepository(FormatRepositories);

    const Format = await userRepositories.find();

    if(!Format)
      throw new Error("Format does not exists");
      
    return  Format;
  }

  async delete(id:string)
  {
    const userRepositories = getCustomRepository(FormatRepositories);

    const FormatAlreadyExists = await userRepositories.findOne({id,});

    if(FormatAlreadyExists)
    {
      throw new Error("Format not exists")
    }

    await userRepositories.delete(id);

    return  FormatAlreadyExists;
  }

  async update(prop:string,{types}:IFormatRequest)
  {
    
    const formatRepositories = getCustomRepository(FormatRepositories);
    
    const Format =  formatRepositories.update(prop,{types});

    if(!Format)
    {
      throw new Error("add error")
    }  
    return Format;
  }
}

export {FormatServices}