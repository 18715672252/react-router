// import { BrowserRouter as Router, Switch, Link, Route, } from "react-router-dom";
import { BrowserRouter , HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import Nav from "./pages/Nav";
import Ucenter from "./pages/Ucenter";
import NotFound from "./pages/NotFound";
import RenderDemo from "./pages/RenderDemo";
function App() {
  return (
    <div className="App">
      
      <HashRouter>
          <Nav />
          {/* path代表路由的url，component代表该路由绑定组件 */}
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* 访问/aaa的时候会重定向到/renderDemo路由 */}
            <Redirect from="/aaa" to="/renderDemo"/>
            {/* 设置接收参数的key,后面加？代表这个参数可有可无 */}
            {/* <NavLink exact to="/mine/1001/封天都">点击去mine</NavLink> */}
            <Route exact path="/mine/:id" component={Mine}/>
            <Route exact path="/Ucenter" component={Ucenter}/>
            <Route exact path="/render" render={ () => { return <div>简约的加载方式</div>} }/>
            <Route exact path="/renderDemo" render={ (props) => <RenderDemo {...props} name="封天都"/> }/>
            <Route component={NotFound}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
