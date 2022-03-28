export enum ROUTES {
  AUTH = 'auth',
  BANS = 'bans',
  DISCORD = 'discord',
  USER = 'user',
  LOGGER = 'logger',
}

export enum SERVICES {
  AUTH = 'AUTH_SERVICE',
  BANS = 'BANS_SERVICE',
  USER = 'USER_SERVICE',
  LOGGER = 'LOGGER_SERVICE',
  DISCORD = 'DISCORD_SERVICE',
  DISCORD_HTTP = 'DISCORD_HTTP_SERVICE',
}

export enum DISCORD {
  BASE_URL = 'https://discord.com/api/v9',
  USER_GUILDS = '/users/@me/guilds',
}
