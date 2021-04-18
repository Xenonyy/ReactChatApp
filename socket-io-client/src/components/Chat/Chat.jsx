import React from 'react';

export class Chat extends React.Component {
    hideUsers = () => {
        const hideElem = document.querySelector("#hide-users");
        const profile =  document.querySelector("#profile");
        const users =  document.querySelector("#users");

        if (hideElem.innerText.match("❯")) {
           profile.classList.toggle("hide-animation");
            users.classList.toggle("hide");
            hideElem.innerText = " ❮ Hide users";
        } else {
           profile.classList.toggle("hide-animation");
            users.classList.toggle("hide");
            hideElem.innerText = "❯";
        }
    }
    jumpBottom = () => {
        const input = document.querySelector("#input");
		const chat = document.querySelector("#chat-container");

        input.addEventListener("click", () => {
            chat.scrollTo(0, chat.scrollHeight);
            
        })
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
                        <input id = "input" autoComplete = "off" maxLength = "256" placeholder = 'Type your message...' type = "text" spellCheck = "true" onClick = {() => this.jumpBottom()}/><button>Send</button>
                    </form>
                </div>
            </section>
        )
    }
}