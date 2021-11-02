import { Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne,ManyToMany } from "typeorm";
import {v4 as uuid} from 'uuid';

import{Format} from './Format';
import {Flavor} from './Flavor'

@Entity("Cookies")

class Cookies
{
  @PrimaryColumn()
  readonly id : string;

  @PrimaryColumn()
  readonly name : string;

  @Column()
  Flavor_id : string;

  @JoinColumn({name: "Flavor_id"})
  @ManyToOne(()=>Flavor)
  flavor:Flavor;

  @Column()
  Format_id : string;

  @JoinColumn({name: "Format_id"})
  @ManyToOne(()=>Format)
  format:Format


  @Column()
  descrition : string;

  @CreateDateColumn()
  created_at : Date;

  @UpdateDateColumn()
  update_at : Date;

  constructor()
  {
    if(!this.id)
      this.id = uuid();
  }
}
export { Cookies }