// discord.js、request、dotenvを読み込む
const { Client, Intents } = require('discord.js');
const request = require("request");
const dotenv = require('dotenv');

dotenv.config(); // 環境変数を読み込む

// Discordクライアントのインスタンスを作成
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ] 
});

// Botがログインしたときの処理
client.on('ready', () => {
    console.log(`${client.user.tag} でログインしました。`);
});

// Botをログインさせる
client.login(process.env.BOT_TOKEN);

// メッセージが作成されたときの処理
client.on('messageCreate', async message => {
    try {
        // メッセージの送信者がボットかを確認
        if (message.author.bot) {
            return;
        }

        let meboResult = await mebo(message.channel.id, message.content);
        message.reply(meboResult.bestResponse.utterance);
    } catch (error) {
        console.error(error);
    }
});

// Mebo APIにリクエストを送信する関数
function mebo(chId, msg) {
    return new Promise((resolve, reject) => {
        request({
            url: "https://api-mebo.dev/api",
            method: "POST",
            json: {
                api_key: "miiboのAPIキーをここに入れる",
                agent_id: "エージェントIDをここに入れる",
                utterance: msg,
                uid: chId
            }
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}
