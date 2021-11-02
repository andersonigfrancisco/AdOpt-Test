import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as NewId } from 'uuid';

@Entity()
class Format {

  @PrimaryColumn()
  id: string;

  @Column()
  types: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {

    if (!this.id) {
      this.id = NewId();
    }
  }
}
export { Format }
