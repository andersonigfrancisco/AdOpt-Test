import {EntityRepository,Repository} from 'typeorm';
import {Format} from '../models/Format';

@EntityRepository(Format)
class FormatRepositories extends Repository<Format>{}

export {FormatRepositories}