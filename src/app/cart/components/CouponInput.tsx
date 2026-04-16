import { useState } from 'react';

interface CouponInputProps {
  onApply: (code: string) => void;
}

const CouponInput = ({ onApply }: CouponInputProps) => {
  const [code, setCode] = useState('');

  const handleApply = () => {
    if (code.trim()) {
      onApply(code.trim());
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Nhập mã giảm giá"
        className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
        onKeyPress={(e) => e.key === 'Enter' && handleApply()}
      />
      <button
        onClick={handleApply}
        className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        Áp dụng
      </button>
    </div>
  );
};

export default CouponInput;
