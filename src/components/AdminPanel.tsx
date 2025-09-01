import React, { useState, useEffect } from 'react';

interface Reservation {
  id: string;
  line_user_id: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  plan_type: 'light' | 'standard' | 'premium';
  reservation_date: string;
  duration_minutes: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  google_calendar_event_id?: string;
  notes?: string;
  created_at: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiSettings, setApiSettings] = useState({
    lineChannelAccessToken: '',
    lineChannelSecret: '',
    googleAccessToken: '',
    googleCalendarId: ''
  });

  useEffect(() => {
    if (isOpen) {
      fetchReservations();
      loadApiSettings();
    }
  }, [isOpen]);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      // Supabase Edge Functionから予約データを取得
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/reservations`);
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('予約データの取得に失敗:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadApiSettings = () => {
    // ローカルストレージからAPI設定を読み込み
    const settings = localStorage.getItem('apiSettings');
    if (settings) {
      setApiSettings(JSON.parse(settings));
    }
  };

  const saveApiSettings = () => {
    localStorage.setItem('apiSettings', JSON.stringify(apiSettings));
    alert('API設定を保存しました');
  };

  const updateReservationStatus = async (id: string, status: string) => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      await fetch(`${supabaseUrl}/functions/v1/reservations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchReservations();
    } catch (error) {
      console.error('ステータス更新に失敗:', error);
    }
  };

  const getPlanName = (planType: string) => {
    const plans = {
      light: 'ライトプラン',
      standard: 'スタンダードプラン',
      premium: 'プレミアムプラン'
    };
    return plans[planType as keyof typeof plans] || planType;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      pending: '保留中',
      confirmed: '確定',
      completed: '完了',
      cancelled: 'キャンセル'
    };
    return texts[status as keyof typeof texts] || status;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">管理パネル</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* API設定セクション */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">API設定</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LINE Channel Access Token
                </label>
                <input
                  type="password"
                  value={apiSettings.lineChannelAccessToken}
                  onChange={(e) => setApiSettings({
                    ...apiSettings,
                    lineChannelAccessToken: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                  placeholder="LINE Channel Access Token"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LINE Channel Secret
                </label>
                <input
                  type="password"
                  value={apiSettings.lineChannelSecret}
                  onChange={(e) => setApiSettings({
                    ...apiSettings,
                    lineChannelSecret: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                  placeholder="LINE Channel Secret"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Google Access Token
                </label>
                <input
                  type="password"
                  value={apiSettings.googleAccessToken}
                  onChange={(e) => setApiSettings({
                    ...apiSettings,
                    googleAccessToken: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                  placeholder="Google Access Token"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Google Calendar ID
                </label>
                <input
                  type="text"
                  value={apiSettings.googleCalendarId}
                  onChange={(e) => setApiSettings({
                    ...apiSettings,
                    googleCalendarId: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                  placeholder="primary または カレンダーID"
                />
              </div>
            </div>
            <button
              onClick={saveApiSettings}
              className="mt-4 bg-[#0f3d3e] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              API設定を保存
            </button>
          </div>

          {/* 予約一覧セクション */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">予約一覧</h3>
              <button
                onClick={fetchReservations}
                className="bg-[#b08968] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                更新
              </button>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="text-gray-500">読み込み中...</div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">予約日時</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">プラン</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">料金</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">ステータス</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">お客様情報</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td className="border border-gray-200 px-4 py-2">
                          {new Date(reservation.reservation_date).toLocaleString('ja-JP')}
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          {getPlanName(reservation.plan_type)}
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          ¥{reservation.price.toLocaleString()}
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(reservation.status)}`}>
                            {getStatusText(reservation.status)}
                          </span>
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          <div className="text-sm">
                            {reservation.customer_name && <div>名前: {reservation.customer_name}</div>}
                            {reservation.customer_email && <div>Email: {reservation.customer_email}</div>}
                            {reservation.customer_phone && <div>電話: {reservation.customer_phone}</div>}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          <select
                            value={reservation.status}
                            onChange={(e) => updateReservationStatus(reservation.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="pending">保留中</option>
                            <option value="confirmed">確定</option>
                            <option value="completed">完了</option>
                            <option value="cancelled">キャンセル</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {reservations.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    予約データがありません
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
