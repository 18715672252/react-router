import React from "react";
export default class Ucenter extends React.Component {
    componentDidMount () {
        console.log(55);
    }
    shouldComponentUpdate() {
                 // POP 浏览器前进后退， PUSH 点击Link
                return this.props.location.action === "POP"
         }
         goToHome = () => {
             
            //  this.props.history.push('/')
            this.props.history.replace('/')
         }
    render () {
        let params = new URLSearchParams(this.props.location.search)
        return (
            <div>
                ucenter-{params.get('id')}-{params.get('name')}
                <div onClick={ this.goToHome }>mine回到hmoe</div>
            </div>
        )
    }
}