import React from 'react';

export class Chat extends React.Component {
    hideUsers = () => {
        if (document.getElementById("hide-users").innerText.match("❯")) {
            document.querySelector("#profile").classList.toggle("hide-animation");
            document.querySelector("#users").classList.toggle("hide");
            document.getElementById("hide-users").innerText = " ❮ Hide users";
        } else {
            document.querySelector("#profile").classList.toggle("hide-animation");
            document.querySelector("#users").classList.toggle("hide");
            document.getElementById("hide-users").innerText = "❯";
        }
    }
    render() {
        return(
            <section id = "chat-main-container">
                <div id = "profile">
                    <div id = "hide-users" onClick = {() => this.hideUsers()}> ❮ Hide users</div>
                    <div id = "users">Users Online
                    <p id = "users-connected">1 user(s) connected!</p>
                    <span className = "username"></span>
                    </div>
                </div>
                <div id = "chat-container">
                    <ul id = "messages"></ul>
                    <form id="form" action="">
                        <p id = "typing"></p>
                        <input id="input" autoComplete="off" maxLength = "256" placeholder = 'Type your message...'/><button>Send</button>
                    </form>
                </div>
            </section>
        )
    }
}