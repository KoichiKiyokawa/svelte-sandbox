# cloudflare-workers-d1

https://svelte-kit-d1.kiyoshiro.workers.dev/

## Tech Stack

- Front/Server Framework: SvelteKit
- DB: Cloudflare D1

## MEMO

- ローカルで D1 を有効にしつつ、フロント側のホットリロードを効かせることができない。
  - 一応、コードの変更を watch して再ビルドはしてくれる
- 本番環境の D1 は、まれに INSERT 直後に SELECT が走ると更新前の古いデータを取得してしまうことがある。
  - new ページで追加したあとに一覧へ戻ったときなど
