// It uses data_handler.js to visualize elements
dom = { 
    showBoards: function() {
        var target = document.getElementById("body_id");
        var newdiv = document.createElement("div");
        newdiv. innerHTML = `
        <div class="wrapper" id="wrapper">
        <div class="header">
            <div class="title">Proman</div>
            <div class="new_board_button">
                <button onclick="dom.addBoard()">Create board</button>
            </div>
        <div class="board"><div class="board_title">Board title</div><div class="dropdown_button">Dropdown button</div></div>
        </div>
        `
        target.appendChild(newdiv);
        // loads and shows boards appending them to #boards div
        // it adds necessary event listeners also
    },
    showCards: function(boardId) {
        var dropdown_button = document.getElementsByClassName("dropdown_button")
        dropdown_button.addEventListener("click", showCards)

        var parent = document.getElementById("body_id")
        var child = document.getElementsByClassName("wrapper")
        parent.removeChild(child)

        var target = document.getElementById("body_id")
        var newDiv = document.createElement("div")
        newDiv.innerHTML = 
        `<div name="field_new" id="field_new" class="field"> 
                <div name="status_new" id="status_new" class="status"> New </div>
                <div name="area_new" id="area_new" class="area"> 
                    <div name="task_new" id="task_new" class="task"> Task1 </div>
                </div>
            </div>
            <div name="field_progress" id="field_progress" class="field">
                <div name="status_progress" id="status_progress" class="status"> In Progress </div>
                <div name="area_progress" id="area_progress" class="area"> 
                    <div name="task_progress" id="task_progress" class="task"> Task1 </div>
                </div>
            </div>
            <div name="field_testing" id="field_testing" class="field">
                <div name="status_testing" id="status_testing" class="status"> Testing </div>
                <div name="area_testing" id="area_testing" class="area"> 
                    <div name="task_testing" id="task_testing" class="task"> Task1 </div>
                </div>
            </div>
            <div name="field_done" id="field_done" class="field">
                <div name="status_done" id="status_done" class="status"> Done </div>
                <div name="area_done" id="area_done" class="area"> 
                    <div name="task_done" id= "task_done" class="task_done"> Task1 </div>
                </div>
            </div>
            `


        // loads and shows the cards of a board
        // it adds necessary event listeners also
    },
    addBoard: function() {
        var target = document.getElementById("wrapper")
        var newdiv = document.createElement("div")
        newdiv.innerHTML = `<div class="board"><div class="board_title">Board title</div><div class="dropdown_button">Dropdown button</div></div>`
        target.appendChild(newdiv)
    }
    // here comes more features
}   
