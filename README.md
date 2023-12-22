bot.jsファイルをVSCodeなどで開き46と47行目のところにmiiboで取得したデータを入れてください  
```
46 api_key: "miiboのAPIキーをここに入れる",  
47 agent_id: "エージェントIDをここに入れる",
```


.envファイルは以下リンクからボットトークンを取得して"BOTTOKEN"の中に入れてください  
https://discord.com/developers/applications

その他セットアップ

開発者環境  
node v20.10.0  
discord.js v14  
で作られています。  

windowsで動かす際はnodeを別途インストールしてください。  
linux系で動かすときはscreenをインストールしてデーモン化して動かすとよいかもしれないです。
