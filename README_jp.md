# Ambix

[English](README.md)

**Live demo: [https://yokazek.github.io/icon-ambix/](https://yokazek.github.io/icon-ambix/)**

**ブラウザで完結。Material Icons のサブセット化 **

Ambixは、Webプロジェクトに必要な Material Icons だけを直感的に選択し、最適な Google Fonts URL の生成や WOFF2 フォントファイルのダウンロードができる高速なウェブツールです。

## 主な機能

- **カテゴリ絞り込み:** Material Design 公式のカテゴリ（Action, Communication など）でアイコンをフィルタリング。
- **リアルタイム検索:** アイコン名を入力するだけで、瞬時に対象を見つけ出せます。
- **選択状態の永続化:** `localStorage` を使用しているため、ページをリロードしても選択したアイコンが消えることはありません。
- **Google Fonts 連携:** 選択したアイコンに基づき、`Material Icons Outlined` のサブセット用 URL を自動生成。
- **サブセットのダウンロード:** 生成された URL から、最適化された WOFF2 フォントファイルを直接保存可能。
- **モダンな UI:** Bootstrap 5 と Alpine.js を使用した、プレミアムなダークテーマ・インターフェース。

## 使い方

1. **検索:** サイドバーのカテゴリ選択か、右上の検索バーからアイコンを探します。
2. **選択:** アイコンをクリックして、サブセット（抽出リスト）に追加します。
3. **確認:** 下部のフローティングバーや「Preview」モーダルで、選択中のアイコンを確認。
4. **書き出し:** 「Generate Bundle」をクリックして、Google Fonts URL の取得や Web フォント（WOFF2）のダウンロードを行います。

## 開発 / ローカル実行

ローカル環境で実行する場合は以下の手順に従ってください：

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/yokazek/icon-ambix.git
   cd icon-ambix
   ```
2. 静的サーバーを起動（例: `serve`）:
   ```bash
   npx serve -l 3000
   ```
3. ブラウザで `http://localhost:3000` を開きます。

## 使用技術

- Vanilla JavaScript (ES Modules)
- [Alpine.js](https://alpinejs.dev/) (状態管理・ロジック)
- [Bootstrap 5](https://getbootstrap.com/) (レイアウト・UIコンポーネント)
- [Material Icons](https://fonts.google.com/icons) (アイコンセット・メタデータ)

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
