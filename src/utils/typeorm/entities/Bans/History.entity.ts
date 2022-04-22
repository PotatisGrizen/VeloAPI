import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'litebans_history' })
export class History {
  @PrimaryColumn('bigint')
  id: number;

  @Column('timestamp')
  date: Date;

  @Column('varchar', { length: 16 })
  name: string;

  @Column('varchar', { length: 36 })
  uuid: string;

  @Column('varchar', { length: 46 })
  ip: string;
}
