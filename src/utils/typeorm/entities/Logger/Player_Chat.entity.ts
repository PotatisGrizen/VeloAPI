import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Player_Chat' })
export class Player_Chat {
  @Column('varchar', { name: 'Server_Name', length: 30 })
  serverName: string;

  @PrimaryColumn('datetime')
  Date: Date;

  @Column('varchar', { length: 100 })
  World: string;

  @Column('varchar', { length: 100 })
  Playername: string;

  @Column('varchar', { length: 200 })
  Message: string;

  @Column('tinyint')
  Is_Staff: number;
}
