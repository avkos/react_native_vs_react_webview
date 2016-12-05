import React, {Component} from 'react'
export default class Test21 extends Component {

    componentDidMount() {
        let {parent}=this.props;
        parent.next();

    }
    render() {
        let {R,G,B}=this.props;
        return <div style={{height: 500, backgroundColor: `rgb(${R},${G},${B})`}}/>;
    }

}
