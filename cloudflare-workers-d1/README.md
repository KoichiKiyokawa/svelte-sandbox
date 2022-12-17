# cloudflare-workers-d1
https://svelte-kit-d1.kiyoshiro.workers.dev/

## Tech Stack
- Front/Server Framework: SvelteKit
- DB: Cloudflare D1

## MEMO
- ローカルでD1を有効にしつつ、フロント側のホットリロードを効かせることができない。
  - 一応、コードの変更をwatchして再ビルドはしてくれる
- 本番環境のD1は、まれにINSERT直後にSELECTが走ると更新前の古いデータを取得してしまうことがある。
  - newページで追加したあとに一覧へ戻ったときなど
