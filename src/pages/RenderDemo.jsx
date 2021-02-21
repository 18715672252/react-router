import react from 'react'
export default class RenderDemo extends react.Component {
    componentDidMount () {
        console.log(this.props);
    }
    render () {
        return <div>route中使用render函数加载组件</div>
    }
}