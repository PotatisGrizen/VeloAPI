import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'litebans_mutes' })
export class Mutes {
  @PrimaryColumn('bigint')
  id: number;

  @Column('varchar', { length: 36 })
  uuid: string;

  @Column('varchar', { length: 46 })
  ip: string;

  @Column('varchar', { length: 2048 })
  reason: string;

  @Column('varchar', { length: 36 })
  banned_by_uuid: string;

  @Column('varchar', { length: 128 })
  banned_by_name: string;

  @Column('varchar', { length: 36 })
  removed_by_uuid: string;

  @Column('varchar', { length: 128 })
  removed_by_name: string;

  @Column('varchar', { length: 2048 })
  removed_by_reason: string;

  @Column('timestamp')
  removed_by_date: Date;

  @Column('bigint')
  time: number;

  @Column('bigint')
  until: number;

  @Column('varchar', { length: 32 })
  server_scope: string;

  @Column('varchar', { length: 32 })
  server_origin: string;

  @Column('bit')
  silent: number;

  @Column('bit')
  ipban: number;

  @Column('bit')
  ipban_wildcard: number;

  @Column('bit')
  active: number;
}
