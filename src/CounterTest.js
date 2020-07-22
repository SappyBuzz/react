import React,{Component} from 'react'


class CounterTest extends Component{

    constructor(){
        super();
        this.state = {
            count:0
        }
        this.handelClick = this.handelClick.bind(this);
        this.timer = null;
    }
    handelClick(){
        this.setState(prevState => {
            return{
            count: prevState.count + 1
            }       
         })
    }


  
    // componentDidMount() {
    //   this.timer = setTimeout(() => this.handelClick(), 3000)
    // }
    
    // componentWillUnmount() {
    //   clearTimeout(this.timer);
    // }
    render(){
        this.timer = setTimeout(() => this.handelClick(), 1000)
        clearTimeout(this.timer);
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handelClick}>Click</button>
            </div>
        );
    }
}

export default CounterTest