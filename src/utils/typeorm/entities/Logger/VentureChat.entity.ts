import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'VentureChat' })
export class VentureChat {
  @PrimaryColumn('bigint')
  ID: number;

  @Column('datetime')
  ChatTime: Date;

  @Column('text')
  UUID: string;

  @Column('text')
  Name: string;

  @Column('text')
  Server: string;

  @Column('text')
  Channel: string;

  @Column('text')
  Text: string;

  @Column('text')
  Type: string;
}
