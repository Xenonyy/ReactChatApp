import React from 'react';

export const Chat = () => {
    return(
        <section id = "chat-main-container">
            <div id = "profile">
                <div id = "users">Users Online
                <p id = "users-connected">1 user connected!</p>
                <p className = "username"></p>
                </div>
            </div>
            <div id = "chat-container">
                <ul id = "messages"></ul>
                <form id="form" action="">
                    <p id = "typing"></p>
                    <input id="input" autoComplete="off" /><button>Send</button>
                </form>
            </div>
        </section>
    )
} 