import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Cards from '../cards/cards';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import PropertyNotLogged from '../property-not-logged-screen/property-not-logged-screen';
import PropertyScreen from '../property-screen/property-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <WelcomeScreen offersCount={offersCount} />
        </Route>
        <Route exact path={AppRoute.MainEmpty}>
          <MainEmptyScreen/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <FavoritesScreen />
        </Route>
        <Route exact path={AppRoute.FavoritesEmpty}>
          <FavoritesEmptyScreen />
        </Route>
        <Route exact path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
        <Route exact path={AppRoute.Card}>
          <Cards />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.NotLogged}>
          <PropertyNotLogged />
        </Route>
        <Route exact path={AppRoute.Property}>
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
