import style from "../../theme";

export const contentFooterStyle = (type: "topic" | "description"): React.CSSProperties => ({
    fontSize: style.theme.typography.fontSize.paragraph,
    fontWeight: type === "topic" ? style.theme.typography.weigth[700] : style.theme.typography.weigth[400],
    textAlign: "center",
    color: style.theme.colors.darkBlue,
});
