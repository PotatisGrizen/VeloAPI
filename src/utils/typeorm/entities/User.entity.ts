import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'discord_id' })
  discordId: string;

  @Column({ name: 'access_token' })
  accessToken: string;

  @Column({ name: 'refresh_token' })
  refreshToken: string;

  @Column()
  username: string;

  @Column()
  discriminator: string;

  @Column('boolean', { default: false })
  staff: boolean;

  @Column({ default: 'user' })
  role: string;
}
