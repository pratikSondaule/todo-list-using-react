import React from "react";

function TodoItem(props) {
    return (
        <div className="todoItem">
            <li>{props.text}
            <i class="fa fa-trash icon" onClick={() => {
                props.onChecked(props.id);
            }}>
                
            </i></li>
        </div>
    );
}

export default TodoItem;
