スリランカ満喫ツアーLP　編集用フォルダ
=====================================

【フォルダ構成】

sri_lanka_retreat_lp_2026_editable/
├─ index.html
├─ README.txt
├─ EDIT_CHECKLIST.txt
└─ assets/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ main.js
   └─ images/
      └─ sri-lanka-tour-map.png


【各ファイルの役割】

1. index.html
   LPの文章、見出し、旅程、FAQ、フォーム項目を修正します。

2. assets/css/style.css
   色、文字サイズ、余白、ボタン、スマートフォン表示などを修正します。

3. assets/js/main.js
   FAQの開閉、メニュー、スクロール演出、フォームのデモ表示などを管理します。

4. assets/images/
   LPで使用する画像をすべて保存しています。
   地図、ファーストビュー、アーユルヴェーダ、世界遺産、料理、サリー等の画像が入っています。
   詳細は IMAGE_LIST.txt を確認してください。
   同じファイル名で上書きすれば、HTMLやCSSを大きく変更せず差し替えられます。


【確認方法】

index.htmlをダブルクリックすると、ブラウザで確認できます。
編集後は Ctrl + S で保存し、ブラウザを再読み込みしてください。


【公開前に必ず変更する項目】

index.html内で次の文字を検索してください。

・【主催者名】
・【企画会社名】
・【旅行会社名・登録番号】
・デモフォーム
・公開前
・未確定

料金、定員、最少催行人数、宿泊条件、食事条件、取消条件、
旅行企画・実施会社、問い合わせ先なども正式情報へ差し替えてください。


【フォームについて】

現在の先行案内登録フォームと個別相談フォームは表示確認用です。
入力データは保存・送信されません。

公開時は、次のいずれかへ接続してください。

・Googleフォーム
・Formspree
・HubSpot
・Mailchimp
・Brevo
・WordPressフォーム
・自社CRMまたは自社サーバー


【画像について】

LPで使用する画像はすべて assets/images フォルダに保存し、
HTMLとCSSもローカル画像を参照するよう変更しています。
画像の用途、撮影者、出所は IMAGE_LIST.txt にまとめています。

正式公開時は、できる限り実際のツアー写真へ差し替える方が信頼性が上がります。
Unsplash写真を使用する場合は、公開時点の利用条件を確認してください。


【重要】

フォルダ構成とファイル名を変更すると表示が崩れる場合があります。
特に次の相対パスは維持してください。

assets/css/style.css
assets/js/main.js
assets/images/sri-lanka-tour-map.png
