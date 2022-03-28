import { User } from './typeorm/entities/User.entity';

export type UserDetails = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  discriminator: string;
};

export type UpdateUserDetails = {
  accessToken: string;
  refreshToken: string;
  username: string;
  discriminator: string;
};

export type DiscordUserType = {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
};

export type Done = (err: Error, user: User) => void;
