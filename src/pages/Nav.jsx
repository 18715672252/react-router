import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css';
export default class Nav extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <ul>
                <li>
                    {/* 可以直接设置激活后的样式 */}
                    <NavLink activeClassName="aaa" exact activeStyle={{fontSize: '20px'}}  to="/">点击去home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="aaa" exact  to="/mine/1001/封天都">点击去mine</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="aaa" exact  to={{
                        pathname: "/Ucenter",
                        search: '?id=9527&name=孙成龙',
                        state: {aaa: 123}
                    }}>点击去Ucenter</NavLink>
                </li>
                <li>
                    {/* 设置激活后类名为aaa */}
                    <NavLink activeClassName="aaa" exact  to="/renderDemo">点击去route中使用render函数加载组件</NavLink>
                </li>
            </ul>
        )
    }
}