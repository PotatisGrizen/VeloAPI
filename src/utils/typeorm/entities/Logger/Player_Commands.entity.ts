import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Player_Commands' })
export class Player_Commands {
  @Column('varchar', { name: 'Server_Name', length: 30 })
  serverName: string;

  @PrimaryColumn('datetime')
  Date: Date;

  @Column('varchar', { length: 100 })
  World: string;

  @Column('varchar', { length: 100, name: 'Player_Name' })
  Player_Name: string;

  @Column('varchar', { length: 256 })
  Command: string;

  @Column('tinyint')
  Is_Staff: number;
}
