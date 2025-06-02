import { Entity, PrimaryGeneratedColumn, Column,  } from 'typeorm';

@Entity()
export class product {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  price!: number;
}
