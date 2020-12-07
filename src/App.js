import React, {Component} from 'react';
import {cars} from "./usersList/users";
import UserComponent from "./component/UserComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    cars.map( (car, index) => {
                        let cls = index % 2 ? 'even' : 'odd';
                        return (
                        <UserComponent item={car}
                                       key={index}
                                       cls={cls}/>);
                    })
                }
            </div>
        );
    }
}

export default App;