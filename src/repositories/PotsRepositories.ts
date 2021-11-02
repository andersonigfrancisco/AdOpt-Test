import {EntityRepository,Repository} from 'typeorm';
import {Pots} from '../models/Pots';

@EntityRepository(Pots)
class PotsRepositories extends Repository<Pots>{}

export {PotsRepositories}