import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  

return (
  <div className={theme}>
    <div className='h-vh-100 dark:bg-gray-800 dark:text-gray-200 '> {/* Wrapper element */}
        {children}
    </div>
  </div>
);
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
