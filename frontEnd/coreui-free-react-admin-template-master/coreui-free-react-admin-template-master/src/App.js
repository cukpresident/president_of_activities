import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Home = React.lazy(() => import('./views/Pages/Home'));
const Home2 = React.lazy(() => import('./views/Pages/Home2'));
const MyPage = React.lazy(() => import('./views/Pages/Mypage'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Create = React.lazy(() => import('./views/Pages/Create'));
const Create2 = React.lazy(() => import('./views/Pages/Create2'));
const Show = React.lazy(() => import('./views/Pages/Show'));
const Todolist_page1 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P1'));
const Todolist_page2 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P2'));
const Todolist_page3 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P3'));
const Todolist_page4 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P4'));
const Todolist_page5 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P5'));
const Todolist_page6 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P6'));
const Todolist_page7 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P7'));
const Todolist_page8 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P8'));
const Todolist_page9 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P9'));
const Todolist_page10 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P10'));
const Todolist_page11 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P11'));
const Todolist_page12 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P12'));
const Todolist_page13 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P13'));
const Todolist_page14 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P14'));
const Todolist_page15 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P15'));
const Todolist_page16 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P16'));
const Todolist_page17 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P17'));
const Todolist_page18 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P18'));
const Todolist_page19 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P19'));
const Todolist_page20 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P20'));
const Todolist_page21 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P21'));
const Todolist_page22 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P22'));
const Todolist_page23 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P23'));
const Todolist_page24 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P24'));
const Todolist_page25 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P25'));
const Todolist_page26 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P26'));
const Todolist_page27 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P27'));
const Todolist_page28 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P28'));
const Todolist_page29 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P29'));
const Todolist_page30 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P30'));
const Todolist_page31 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P31'));
const Todolist_page32 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P32'));
const Todolist_page33 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P33'));
const Todolist_page34 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P34'));
const Todolist_page35 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P35'));
const Todolist_page36 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P36'));
const Todolist_page37 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P37'));
const Todolist_page38 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P38'));
const Todolist_page39 = React.lazy(() => import('./views/Pages/Todolist_page/tdList_P39'));
const InitTodo = React.lazy(() => import('./views/Pages/Todolist_page/initTodo'));




class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route exact path="/home" name="Home Page" render={props => <Home {...props}/>} />
            <Route exact path="/home2" name="Home Page2" render={props => <Home2 {...props}/>} />
            <Route exact path="/mypage" name="My Page" render={props => <MyPage {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/create" name="Create" render={props => <Create {...props}/>} />
              <Route exact path="/create2" name="Creat2" render={props => <Create2 {...props}/>} />
              <Route exact path="/show" name="Show" render={props => <Show {...props}/>} />
              <Route exact path="/tdpage1" name="tdlist page1" render={props => <Todolist_page1 {...props}/>} />
              <Route exact path="/tdpage2" name="tdlist page2" render={props => <Todolist_page2 {...props}/>} />
              <Route exact path="/tdpage3" name="tdlist page3" render={props => <Todolist_page3 {...props}/>} />
              <Route exact path="/tdpage4" name="tdlist page4" render={props => <Todolist_page4 {...props}/>} />
              <Route exact path="/tdpage5" name="tdlist page5" render={props => <Todolist_page5 {...props}/>} />
              <Route exact path="/tdpage6" name="tdlist page6" render={props => <Todolist_page6 {...props}/>} />
              <Route exact path="/tdpage7" name="tdlist page7" render={props => <Todolist_page7 {...props}/>} />
              <Route exact path="/tdpage8" name="tdlist page8" render={props => <Todolist_page8 {...props}/>} />
              <Route exact path="/tdpage9" name="tdlist page9" render={props => <Todolist_page9 {...props}/>} />
              <Route exact path="/tdpage10" name="tdlist page10" render={props => <Todolist_page10 {...props}/>} />
              <Route exact path="/tdpage11" name="tdlist page11" render={props => <Todolist_page11 {...props}/>} />
              <Route exact path="/tdpage12" name="tdlist page12" render={props => <Todolist_page12 {...props}/>} />
              <Route exact path="/tdpage13" name="tdlist page13" render={props => <Todolist_page13 {...props}/>} />
              <Route exact path="/tdpage14" name="tdlist page14" render={props => <Todolist_page14 {...props}/>} />
              <Route exact path="/tdpage15" name="tdlist page15" render={props => <Todolist_page15 {...props}/>} />
              <Route exact path="/tdpage16" name="tdlist page16" render={props => <Todolist_page16 {...props}/>} />
              <Route exact path="/tdpage17" name="tdlist page1" render={props => <Todolist_page17 {...props}/>} />
              <Route exact path="/tdpage18" name="tdlist page2" render={props => <Todolist_page18 {...props}/>} />
              <Route exact path="/tdpage19" name="tdlist page3" render={props => <Todolist_page19 {...props}/>} />
              <Route exact path="/tdpage20" name="tdlist page4" render={props => <Todolist_page20 {...props}/>} />
              <Route exact path="/tdpage21" name="tdlist page5" render={props => <Todolist_page21 {...props}/>} />
              <Route exact path="/tdpage22" name="tdlist page6" render={props => <Todolist_page22 {...props}/>} />
              <Route exact path="/tdpage23" name="tdlist page7" render={props => <Todolist_page23 {...props}/>} />
              <Route exact path="/tdpage24" name="tdlist page8" render={props => <Todolist_page24 {...props}/>} />
              <Route exact path="/tdpage25" name="tdlist page9" render={props => <Todolist_page25 {...props}/>} />
              <Route exact path="/tdpage26" name="tdlist page10" render={props => <Todolist_page26 {...props}/>} />
              <Route exact path="/tdpage27" name="tdlist page11" render={props => <Todolist_page27 {...props}/>} />
              <Route exact path="/tdpage28" name="tdlist page12" render={props => <Todolist_page28 {...props}/>} />
              <Route exact path="/tdpage29" name="tdlist page12" render={props => <Todolist_page29 {...props}/>} />
              <Route exact path="/tdpage30" name="tdlist page4" render={props => <Todolist_page30 {...props}/>} />
              <Route exact path="/tdpage31" name="tdlist page5" render={props => <Todolist_page31 {...props}/>} />
              <Route exact path="/tdpage32" name="tdlist page6" render={props => <Todolist_page32 {...props}/>} />
              <Route exact path="/tdpage33" name="tdlist page7" render={props => <Todolist_page33 {...props}/>} />
              <Route exact path="/tdpage34" name="tdlist page8" render={props => <Todolist_page34 {...props}/>} />
              <Route exact path="/tdpage35" name="tdlist page9" render={props => <Todolist_page35 {...props}/>} />
              <Route exact path="/tdpage36" name="tdlist page10" render={props => <Todolist_page36 {...props}/>} />
              <Route exact path="/tdpage37" name="tdlist page11" render={props => <Todolist_page37 {...props}/>} />
              <Route exact path="/tdpage38" name="tdlist page12" render={props => <Todolist_page38 {...props}/>} />
              <Route exact path="/tdpage39" name="tdlist page12" render={props => <Todolist_page39 {...props}/>} />
              <Route exact path="/inittodo" name="init todo" render={props => <InitTodo {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
