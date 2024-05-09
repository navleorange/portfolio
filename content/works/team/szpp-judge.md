---
title: szpp-judge
description: サークル活動の一環で行われたAtCoderのようなジャッジシステムの開発です。ランキングシステムを担当しました。
lang: Go
GitHub: https://github.com/szpp-dev-team/szpp-judge
display_order: 1
---

::MarkDownBase

# szpp-judge
GitHub:[szpp-judge](https://github.com/szpp-dev-team/szpp-judge) <br>
担当したランキングシステム:[ランキングシステムのコード](https://github.com/szpp-dev-team/szpp-judge/blob/feat/standings-api/backend/usecases/contests/standings.go)

## 概要
サークル活動の一環として浜松市の小中高生にScratchを用いて競技プログラミングをすることでプログラミングをする体験を提供する講座を開催する運びとなり、そこで使用するためにAtCoderのようなジャッジシステムの開発をすることとなりました。このシステムで私はコンテストのランキング機能の実装を担当し、講座の最後のコンテストで使用されました。

## 市民講座
サークルで行った市民講座のチラシなどを掲載下さっているページです。

### 2023
浜松市:[浜松市と大学との連携事業](https://www.city.hamamatsu.shizuoka.jp/shise/koho/koho/hodohappyo/2023/10/1204.html) <br>
静岡大学:[大学生による中高生向け無料プログラミング講座](https://www.inf.shizuoka.ac.jp/event/detail.html?CN=154860)

## 開発情報
以下は私が担当したランキングシステムを実装する際に使用した物です。

**言語**: Go <br>
**フレームワーク**: gRPC, Facebook/ent

## 工夫した点
チームでの開発だったため他の人が修正する可能性などを考慮し、変数名などを簡潔で分かりやすいものにするように気をつけました。それでも誤解を生むかもしれない物には、コメントを記述することで誤解を生まないようにする工夫をしました。また初めて使用する技術がとても多かったので、分からない点や不安な点を積極的に仲間に質問して問題解決することを意識しました。

::