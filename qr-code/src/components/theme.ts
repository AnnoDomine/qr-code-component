/**
 * Theme injection for global stylings
 */
const theme = {
    colors: {
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
    },
    typography: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: {
            paragraph: "15px",
        },
        weigth: {
            400: 400,
            700: 700,
        },
    },
    additionals: {
        flexCenterDisplay: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        } as React.CSSProperties,
    },
};

/**
 * Global style injection
 * @returns theme for global stylings
 */
const style = { theme };

export default style;
