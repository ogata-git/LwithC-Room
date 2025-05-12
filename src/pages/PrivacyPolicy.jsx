import React, { useState } from "react";
import ContactModal from "../components/ContactModal";

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="my-4 md:my-12 max-w-3xl mx-auto p-6 bg-gray-300/80 rounded-2xl shadow-md text-sm sm:text-base border-gray-400 border-x-1">
      <h1 className="text-lg sm:text-2xl font-bold mb-4">プライバシーポリシー</h1>
      <p className="mb-6">
        LwithC Corporate（以下「当社」）は、個人情報の保護を社会的責務と認識し、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定め、適切な取扱いと保護に努めます。
      </p>

      {/* セクション 1 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">1. 個人情報の定義</h2>
        <p>
          本ポリシーにおける「個人情報」とは、生存する個人に関する情報であって、氏名、住所、電話番号、メールアドレス、学年・学校名、面談記録、チャット履歴、学習履歴など、特定の個人を識別できる情報を指します。
        </p>
      </section>

      {/* セクション 2 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">2. 収集する情報の種類および収集方法</h2>
        <h3 className="font-medium">お客様からご提供いただく情報</h3>
        <ul className="list-disc list-inside mb-4">
          <li>会員登録時：氏名、メールアドレス、電話番号、学校名・学年、保護者氏名（中学生以下の場合）</li>
          <li>サービス利用時：面談予約情報、チャットでの相談内容、学習履歴（テスト結果・進捗状況）</li>
          <li>お問い合わせ時：お問い合わせ内容、連絡先情報</li>
        </ul>
        <h3 className="font-medium">ウェブサイト利用時に自動取得する情報</h3>
        <ul className="list-disc list-inside">
          <li>クッキー（Cookie）、アクセスログ（IPアドレス、ブラウザ情報、利用日時など）</li>
        </ul>
      </section>

      {/* セクション 3 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">3. 個人情報の利用目的</h2>
        <ul className="list-decimal list-inside">
          <li>学習プランの作成、教材提供および学習サポート</li>
          <li>面談予約管理、チャットサポートの運営</li>
          <li>AO・推薦入試対策や人生相談に関するアドバイス提供</li>
          <li>サービスの改善・品質向上のための分析</li>
          <li>サービスに関するお知らせ（システムメンテナンス、重要な変更など）</li>
          <li>法令に基づく対応</li>
        </ul>
      </section>

      {/* セクション 4 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">4. 個人情報の第三者提供</h2>
        <p>当社は、次の場合を除き、個人情報を第三者に提供しません。</p>
        <ul className="list-disc list-inside">
          <li>お客様の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人命・身体・財産の保護のために必要がある場合で、本人の同意を得ることが難しいとき</li>
          <li>業務委託先に対して、必要最小限の範囲で取り扱いを委託する場合</li>
        </ul>
      </section>

      {/* セクション 5 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">5. 個人情報の安全管理</h2>
        <ul className="list-disc list-inside">
          <li>データの暗号化（SSL/TLS）</li>
          <li>社内アクセス権限の制限・ログ管理</li>
          <li>定期的なセキュリティ教育および監査</li>
        </ul>
      </section>

      {/* セクション 6 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">6. クッキー（Cookie）等の利用</h2>
        <p>
          当社ウェブサイトでは、サービス向上およびアクセス解析のためにクッキーを使用します。
          お客様はブラウザの設定によりクッキーの拒否・削除が可能ですが、その場合、一部機能が利用できなくなることがあります。
        </p>
      </section>

      {/* セクション 7 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">7. 保有期間および廃棄</h2>
        <p>個人情報は、利用目的に応じて必要な期間保有し、不要となった情報は適切に消去または匿名化します。</p>
      </section>

      {/* セクション 8 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">8. お客様の権利</h2>
        <p>お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除・利用停止等をご請求いただけます。ご請求は、以下の「お問い合わせ窓口」までご連絡ください。</p>
      </section>

      {/* セクション 9 */}
      <section className="mb-6">
        <h2 className="text-base sm:text-xl font-semibold mb-2">9. 法令遵守および見直し</h2>
        <p>当社は、個人情報保護に関する法令・ガイドラインを遵守するとともに、本ポリシーを定期的に見直し、改善を図ります。</p>
      </section>

      {/* セクション 10 */}
      <section className="mb-8">
        <h2 className="text-base sm:text-xl font-semibold mb-2">10. お問い合わせ窓口</h2>
        <p className="mb-4">
          ○○株式会社 お問い合わせ窓口<br />
          〒000-0000 東京都中央区○○町1-2-3<br />
          E-mail: privacy@example.com
        </p>
        <p className="mb-4 text-gray-700">
          ご不明点やご質問がございましたら、下記のボタンからお気軽にお問い合わせください。
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition text-sm sm:text-base"
        >
          お問い合わせフォームを開く
        </button>
      </section>

      {/* モーダル背景 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-700/80 z-40"
          onClick={() => setIsModalOpen(false)}
        />
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
