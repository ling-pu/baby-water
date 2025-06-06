import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const toggleCategory = (cat) => {
    if (cat === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const isSelected = prev.includes(cat);
        let newSelection = isSelected
          ? prev.filter((item) => item !== cat)
          : [...prev.filter((item) => item !== "All"), cat];

        return newSelection.length > 0 ? newSelection : ["All"];
      });
    }
  };

  return (
    <CategoryContext.Provider value={{ selectedCategories, toggleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}
