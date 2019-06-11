import React from 'react';

import '../App.css';

import startData from '../startData.json';


class DataRows extends React.Component {
    
    createDataRows = () => {
        var qntRows = startData.schema.rows.length;
        var dataRow = [];
        for (var i_row = 0; i_row < qntRows; ++i_row) {
            
            var arrColumns = startData.schema.rows[i_row].columns.map(
                (item, i_column) =>
                    <a key={i_column}>
                        <input
                            id={i_row + '_' + i_column}
                            //onChange={handleChange}
                            className='input_n'
    
                            type={item.elements[0].type}
                            defaultValue= {item.elements[0].defaultValue}
                            placeholder= {item.elements[0].defaultValue}
                        />
                    </a>    
            );
            dataRow[i_row] = <li key={i_row}>{arrColumns}</li>
        }
        return dataRow
    }

    render() {
        return (<ul>{this.createDataRows()}</ul>)
      }
}

class Actions extends React.Component { 
    createActions = () => {
        var arrActions = startData.actions.map((item) =>
            <ul><button
                type='submit'
            // onChange={handleChange}
            >
                    {item.label}
                </button></ul>
            )
            return arrActions
        }
    render() {
        return (this.createActions())
      }
}    

class Add extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <DataRows/>
                <Actions/>
            </div>
        )
    }
}

export default Add