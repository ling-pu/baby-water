// MainSearch.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainSearch({ isOpen, onSearch, onClose }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim()) {
      onSearch(keyword);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mainSearch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="mainSearch-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={onClose}>x</button>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="輸入商品關鍵字"
            />
            <button onClick={handleSearch}>搜尋</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
