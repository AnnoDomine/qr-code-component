// global style injection
import style from "../theme";

/**
 *
 * @param {string} width Width of the component. Based in useMobile
 * @returns {React.CSSProperties} CSS-styles for ContentBox component
 */
export const contentBoxStyle = (width: string): React.CSSProperties => ({
    backgroundColor: style.theme.colors.white,
    borderRadius: "15px",
    padding: "15px",
    width,
});
