---
title: tweet-performance
description: 大学の成績が追加された際にX(旧Twitter)とSlackで通知するシステムです。
lang: Python3
library: selenium
GitHub: https://github.com/navleorange/tweet-performance
---

::MarkDownBase

# tweet-performance
GitHub:[tweet-performance](https://github.com/navleorange/tweet-performance)

## 概要
履修した授業の成績が学期終わりに「学務情報システム」に登録され確認することができるのですが、授業毎にバラバラな日付・時間で追加されることに加え、それぞれの成績が学務情報システムに追加される日・時間の告知もありません。そのため、毎日何度か学務情報システムにログインし成績が追加されているか確認する必要がありました。そこでseleniumを用いて学務情報へログイン、成績の確認の作業を自動化し、成績の更新があった際に通知を送ることで成績確認を便利にするために作成しました。

## 開発情報
言語: Python3 <br>
ライブラリ: selenium, tweepy <br>
デプロイ先: Heroku <br>
DB: Postgres(Heroku Postgres) <br>
Cron: Heroku Scheduler <br>

## 選定理由
この開発を行うまでに講義の課題でPythonを用いた簡単なスクレイピングをしたことがあったため、同様の方法にすることで時間がかかりすぎることなく制作することができると考えたためPythonとseleniumを使用しました。また、成績がいつ更新されるか分からないため定期的にプログラムを実行可能な環境を用意する必要がありました。Herokuを使用することで、定期実行するためのCronや公表された成績を保持するためのDB、プログラムを実行する環境を当時は無料で使用することができたためHerokuをデプロイ先にしました。

## 動作結果
実際に運用していた際のスクリーンショットです。Slackのスクリーンショットは運用時のものが参照できなくなっていたので、テスト時の画像となっています。

### X(旧Twitter)
![XImage](/screenshot/tweet-performance/x.png)

### Slack
![SlackImage](/screenshot/tweet-performance/slack.png)

## 開発時に工夫した点
学務情報システムにいつ変更が起こるか分からない状態であったため、可能な限り処理を関数に分けることで変更が生じても部分的な変更で済むようにすることに気をつけました。また、変更の際にどの関数がどのような引数を必要としどのような処理を行うか分かりやすくするためにdocstringを書くことを意識しました。

::