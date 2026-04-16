import CouponInput from '../components/CouponInput';

interface OrderSummaryProps {
  subtotal: number;
  totalDiscount: number;
  total: number;
  selectedCount: number;
  cartCount: number;
}

const OrderSummary = ({
  subtotal,
  totalDiscount,
  total,
  selectedCount,
  cartCount,
}: OrderSummaryProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleApplyCoupon = (code: string) => {
    console.log('Applying coupon:', code);
    // TODO: Implement coupon logic
  };

  return (
    <div className="lg:sticky lg:top-24 space-y-4">
      {/* Summary Card */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="font-semibold text-gray-900 mb-4 text-sm">Tóm tắt đơn hàng</h2>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Khóa học ({selectedCount})</span>
            <span className="font-medium text-gray-900">{formatPrice(subtotal)}</span>
          </div>
          
          {totalDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Giảm giá</span>
              <span className="font-medium text-green-600">-{formatPrice(totalDiscount)}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Phí giao dịch</span>
            <span className="font-medium text-gray-900">Miễn phí</span>
          </div>

          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900 text-sm">Tổng cộng</span>
              <span className="text-lg font-semibold text-orange-600">{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        <button
          disabled={selectedCount === 0}
          className="w-full py-2.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50 text-sm"
        >
          Thanh toán ({selectedCount})
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Thanh toán an toàn và bảo mật
        </p>
      </div>

      {/* Coupon Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-3 text-sm">Mã giảm giá</h3>
        <CouponInput onApply={handleApplyCoupon} />
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
            ELEARNING10
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
            NEWUSER20
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
            SAVE30
          </span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-3 text-sm">Đảm bảo chất lượng</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">
              ✓
            </div>
            <span className="text-sm text-gray-600">30 ngày hoàn tiền</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">
              🎓
            </div>
            <span className="text-sm text-gray-600">Chứng chỉ hoàn thành</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">
              ♾️
            </div>
            <span className="text-sm text-gray-600">Truy cập trọn đời</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
