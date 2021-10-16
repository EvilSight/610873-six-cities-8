import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute , AuthorizationStatus } from '../../const';
import Cards from '../cards/cards';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import PropertyScreen from '../property-screen/property-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import PrivateRoute from '../private-route/private-route';

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
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
        <Route exact path={AppRoute.Card}>
          <Cards />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Property}>
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
