import CartItem from '../components/CartItem';

interface CartItem {
  id: string;
  courseId: string;
  title: string;
  instructor: string;
  thumbnail: string | null;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  level: string;
}

interface CartItemSectionProps {
  cartItems: CartItem[];
  selectedItems: Set<string>;
  onToggleSelect: (id: string) => void;
  onToggleSelectAll: () => void;
  onRemoveItem: (id: string) => void;
}

const CartItemSection = ({
  cartItems,
  selectedItems,
  onToggleSelect,
  onToggleSelectAll,
  onRemoveItem,
}: CartItemSectionProps) => {
  const isAllSelected = cartItems.length > 0 && selectedItems.size === cartItems.length;

  return (
    <div className="border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={onToggleSelectAll}
              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 cursor-pointer"
            />
            <span className="font-medium text-gray-900 text-sm">Chọn tất cả ({cartItems.length})</span>
          </div>
          <button className="text-sm text-gray-500 hover:text-gray-900">
            Lưu danh sách
          </button>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="px-4">
          <CartItem
            {...item}
            selected={selectedItems.has(item.id)}
            onToggleSelect={onToggleSelect}
            onRemove={onRemoveItem}
          />
        </div>
      ))}

      {cartItems.length === 0 && (
        <div className="p-12 text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Giỏ hàng trống</h3>
          <p className="text-sm text-gray-500">Bạn chưa thêm khóa học nào vào giỏ hàng.</p>
        </div>
      )}
    </div>
  );
};

export default CartItemSection;
