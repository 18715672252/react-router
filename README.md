## react-router
1.npm i react-router-dom -S
2.引入import { BrowserRouter, HashRouter, Switch, Link, Route, } from "react-router-dom";
ps: 
## 用法
### 第一种(history)
    <BrowserRouter> 
        path代表路由的url，component代表该路由绑定组件
        <Switch>是唯一的，因为它仅仅只会渲染一个路径，当它匹配完一个路径后，就会停止渲染了
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/mine" component={Mine}/>
            <Route exact path="/render" render={ () => { return <div>简约的加载方式</div>} }/>
        </Switch>
    </BrowserRouter>
### 第一种(hash)
    <HashRouter> 
        path代表路由的url，component代表该路由绑定组件,exact精准匹配（只有页面的路由和<Route>的path属性精确比对后完全相同该<Route>才会被渲染。）
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/mine" component={Mine}/>
            <Route exact path="/render" render={ () => { return <div>简约的加载方式</div>} }/>
        </Switch>
    </HashRouter>

ps:建议如果没有子路由的情况，建议大家配都加一个exact；如果有子路由，建议在子路由中加exact，父路由不加；
ps:Route的path的如果根路径一定要加exact，还有Link要to是根路径也一定要加exact
### Link点击跳转 最好每个Link都加一个精准匹配
    1.引入import { Link } from 'react-router-dom'
    to跳转路径为/mine所对应的组件
    <Link exact to="/mine">点击去mine</Link>
### NavLink高亮 Nav.jsx 最好每个Link都加一个精准匹配
    1.引入import { NavLink } from 'react-router-dom'
    to跳转路径为/mine所对应的组件
    点击跳转该路径成功后，会给标签增加一个active的类型名
    <NavLink exact to="/mine">点击去mine</NavLink>
    可以设置激活后的class，也可以直接设置激活后的样式
    <NavLink activeClassName="aaa" activeStyle={{fontSize: '20px'}} exact to="/mine">点击去mine</NavLink>

### 404也面和Switch，Route中使用render函数加载组件或者dom
<HashRouter> 
        path代表路由的url，component代表该路由绑定组件,exact精准匹配（只有页面的路由和<Route>的path属性精确比对后完全相同该<Route>才会被渲染。）
        只有页面的路由与Route的path都不相同的话，就会加载没有path的那个route
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mine" component={Mine}/>
            <Route exact path="/render" render={ () => { return <div>简约的加载方式</div>} }/>
            使用此种方法注册的路由组件，在组件内部会娶不到this.props，需要向该组件传递一个props下面是例子
            <Route exact path="/renderDemo" render={ (props) => <RenderDemo {...props} name="封天都"/> }/>
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>

### 路由传参
    #### 第一种方式（/mine/1001/封天都）
        生命接受的参数，后面加？代表这个参数可有可无
        <Route exact path="/mine/:id?/:name?" component={Mine}/>
        跳转是向该路由传递参数（在组件中通过this.props.match.params）获取
        1.<NavLink activeClassName="aaa" exact to="/mine/1001/封天都">点击去mine</NavLink>

    #### 第二种（/mine?id=1001&name=封天都）
        跳转是向该路由传递参数,在组件中通过let id = new URLSearchParams(this.props.location.search).get('id')获取
        <NavLink activeClassName="aaa" exact  to={{
                        pathname: "/Ucenter",
                        search: '?id=9527&name=孙成龙',
                        state: {aaa: 123}
                    }}>点击去Ucenter</NavLink>

### 重定向Redirect
    访问/aaa的时候会重定向到/renderDemo路由
    <Redirect from="/aaa" to="/renderDemo"/>
    isLOgin为false重定向到首页
    {
        isLOgin ? null : <Redirect  to="/"/>
    }
### 编程是路由
    this.props.history.replace('/')
    this.props.history.push('/')
    this.props.history.go(-1)
    this.props.history.goBack()

### 高阶组件（withRouter）解决：有些组件没有在路由中定义，不会有对应的路由对象

withRouter(组件名)







