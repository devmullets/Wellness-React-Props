import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    generateInnerJSX = () => {
        return wellnessFactors.map( item => {
            <WellnessItem id= {item.id}/>;
            <WellnessItem title= {item.title}/>;
            <WellnessItem color= {item.color}/>;
        })
    }
    render(){
        console.log(this.props)
        return (
            <Pie size={300}>
                {/* * TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
                {this.generateInnerJSX()}
            </Pie>
        )
    }
}