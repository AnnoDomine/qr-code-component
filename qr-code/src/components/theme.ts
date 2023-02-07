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

const breakpoints = {
    minDesktop: "600px",
    minMobile: "0px",
};

const responsivnes = {
    desktop: "1440px",
    mobile: "375px",
};

const style = { theme, breakpoints, responsivnes };

export default style;
