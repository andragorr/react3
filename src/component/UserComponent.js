import React, {Component} from 'react';
import './cars.css'

class UserComponent extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div className={cls}> {item.model} -
                {item.year} -
                {item.power} -
                {item.color} -
                {item.driver.name} -
                {item.driver.years} -
                {item.driver.sex} -
                {item.driver.skills}
            </div>
        );
    }
}

export default UserComponent;