import { Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne,ManyToMany } from "typeorm";
import {v4 as uuid} from 'uuid';

import {Cookies} from './Cookies';

@Entity("Pots")

class Pots
{
  @PrimaryColumn()
  readonly id : string;

  @Column()
  name : string;


  @Column()
  quantity : number;



  @Column()
  Cookie_id : string;

  @JoinColumn({name: "Cookie_id"})
  @ManyToOne(()=>Cookies)
  cookies:Cookies

  
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
export { Pots }