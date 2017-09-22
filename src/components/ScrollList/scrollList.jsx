import React,{Component,PropsType} from 'react';

class MyComponent extends Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		let {outputStr}=this.props
		return (
           <div className='qhx'>
             {outputStr}
           </div>
		)
	}
}
export default MyComponent;