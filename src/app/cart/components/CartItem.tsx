import { Trash2 } from 'lucide-react';

interface CartItemProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string | null;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  level: string;
  selected: boolean;
  onToggleSelect: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({
  id,
  title,
  instructor,
  thumbnail,
  price,
  originalPrice,
  discount,
  category,
  level,
  selected,
  onToggleSelect,
  onRemove,
}: CartItemProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0">
      {/* Checkbox */}
      <div className="flex items-start pt-1">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelect(id)}
          className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 cursor-pointer"
        />
      </div>

      {/* Thumbnail */}
      <div className="flex-shrink-0">
        <div className="h-20 w-32 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl">📚</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{instructor}</p>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">{category}</span>
          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">{level}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-orange-600">{formatPrice(price)}</span>
          {discount > 0 && (
            <>
              <span className="text-sm text-gray-400 line-through">{formatPrice(originalPrice)}</span>
              <span className="px-1.5 py-0.5 bg-orange-50 rounded text-xs text-orange-600 font-medium">
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Remove Button */}
      <div className="flex-shrink-0">
        <button
          onClick={() => onRemove(id)}
          className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          title="Xóa khỏi giỏ hàng"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
