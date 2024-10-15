interface ArrowProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

export const Arrow = ({ isDropdownOpen, toggleDropdown }: ArrowProps) => {
  return (
    <button
      onClick={toggleDropdown}
      className="flex items-center gap-2 text-black text-sm focus:outline-none md:hidden"
    >
      <svg
        className={`w-6 h-6 transition-transform ${
          isDropdownOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};
