import {EntityRepository,Repository} from 'typeorm';
import {Flavor} from '../models/Flavor';

@EntityRepository(Flavor)
class FlavorRepositories extends Repository<Flavor>{}

export {FlavorRepositories}