import React,{Component} from 'react';
import TodoItem from './TodoItem'
import todoData from './todoData';
import AddNewTodoItem from './AddNewTodoItem';

class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            isUpdated:false,
            todos:todoData,
            current_todo:{
                id:'',
                text:"",
                completed: false
            }
        }  
        this.handelChange = this.handelChange.bind(this);  
        this.formFieldChange = this.formFieldChange.bind(this);    
        this.formOnSubmit = this.formOnSubmit.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
    }


    handelChange(id){

            this.setState(prevState => {
                
            const updatedTodo = prevState.todos.map((todo,index)=> {
                    if(todo.id === id){
                        todo = { ...todo} 
                        todo.completed = !todo.completed 
                    }
                    
                    return todo
                })
                
                return{
                    isUpdated:!prevState.isUpdated,
                    todos:updatedTodo
                }

            })
    }


    formFieldChange(e){
        this.setState({
            current_todo:{
                id:Date.now(),
                text:e.target.value
            }
        })
    }

    formOnSubmit(e){
        e.preventDefault();
        const newItem = this.state.current_todo;
        if(newItem.text !== ''){
        this.setState(prevState=>{
            const updatedTodos = prevState.todos.map((todo,index)=>{
                if(todo.text === newItem.text){
                    return false;
                }
                return true
            })
            if(updatedTodos){
                return {
                    todos:[...prevState.todos,newItem],
                    current_todo:{
                        id:'',
                        text:'',
                        completed: false
                    }
                }
            }

        })
    }else{
        alert("Please enter todo.")
    }

       
    }

    deleteTodoItem(id){
        const updateTotos = this.state.todos.filter(item => item.id !== id);

        this.setState({
            todos:updateTotos
        })
    }

    render(){
       console.log(Date.now());
        const todoListItem = this.state.todos.map(item=><TodoItem key={item.id} item={item} handelChange={this.handelChange} deleteTodoItem={this.deleteTodoItem}/>);
            return(
                <div className="container">
                <div className="todo-list">
                    <h2 className="todo-header">My Todo List</h2>
                    <AddNewTodoItem item={this.state.current_todo} formFieldChange={this.formFieldChange} formOnSubmit={this.formOnSubmit}></AddNewTodoItem>
                    {todoListItem}
                    </div>
                </div>
            );
        }
    }

export default TodoList;