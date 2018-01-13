import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export interface IconProps{
	type:string;
	className?:string;
	title?:string;
	onClick?:React.MouseEventHandler<any>;
	spin?:boolean;
	style?:Rect.CSSProperties;
}
const Icon=(props:IconProps)=>{
	const {type,className='',spin}=this.props;
	const classString=classNames({
		kwicon:true,

	},className);
	return <i {...omit(props,['type','spin'])}></i>
};
export default Icon;