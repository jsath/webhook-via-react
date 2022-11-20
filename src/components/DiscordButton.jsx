import React from 'react'
import axios from 'axios';

const DiscordButton = () => {
    const handleWebhook = async()=>{
        //creating a default message to send
        const body = {
            content: "SparkleGame",
            tts: false,
            color: "black",
            username: 'SparkleBot',
            avatar_url: 'https://cdn-612d39b2c1ac189e9851cc81.closte.com/wp-content/uploads/2021/11/Wolf-Game-3-360x360.png',
            embeds: [
            {
                title: "Congrats!",
                description: "Welcome to sparklegame!"
            },
            ],
        };
        //sending the message we created(body) via the discord webhook
        try {
            axios.post(
            "!!INSERT YOUR DISCORD WEBHOOK URL HERE!!",
            body
            );
        }catch (error) {
            console.error(error);
        }
        //temporaryily disable the button to avoid the webhook from being spammed
        document.getElementById('webhookButton').disabled = true;
    }

return (
    <>
    <button id='webhookButton' onClick={()=>{handleWebhook()}}>Click to send Webhook!</button>
    </>
)
}

export default DiscordButton