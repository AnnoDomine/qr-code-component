import style from "../theme";

export const contentBoxStyle = (width: string): React.CSSProperties => ({
    backgroundColor: style.theme.colors.white,
    borderRadius: "15px",
    padding: "15px",
    width,
    minHeight: width,
});
