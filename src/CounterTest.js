import React,{Component} from 'react'


class CounterTest extends Component{
    constructor(){
        super();
        this.state = {
            count:1
        }
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick(){
        this.setState(prevState => {
            return{
            count: prevState.count + 1
            }       
         })
    }
    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handelClick}>Click</button>
            </div>
        );
    }
}

export default CounterTest