import React from 'react'
export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount () {
        console.log(this.props)
    }
    render () {
        let params = new URLSearchParams(this.props.location.search)
        console.log(999);
        return (
            <div>
                Home
            </div>
        )
    }
}