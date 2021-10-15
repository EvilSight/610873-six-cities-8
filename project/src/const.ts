export enum AppRoute {
  SignIn = '/login-screen',
  Main = '/',
  Favorites = '/favorites-screen',
  FavoritesEmpty = '/favorites-empty-screen',
  Card = '/offer/:id',
  NotFound = '/not-found-screen',
  MainEmpty = '/main-empty-screen',
  NotLogged = '/property-not-logged-screen',
  Property = '/proproperty-screen',
  DevArtist = '/dev-artist',
  DevGenre = '/dev-genre'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
