export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Favorites = '/favorites',
  FavoritesEmpty = '/favorites-empty',
  Card = '/offer/:id',
  NotFound = '/not-found',
  MainEmpty = '/main-empty',
  NotLogged = '/property-not-logged',
  Property = '/proproperty'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
