import {EntityRepository,Repository,getConnection} from 'typeorm';
import {Cookies} from '../models/Cookies';

@EntityRepository(Cookies)
class CookiesRepositories extends Repository<Cookies>{

  async execute(query:string)
  {
    return getConnection().query(query)
  }
}
export {CookiesRepositories}