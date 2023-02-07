// external components
import ContentBox from "./content/ContentBox";
// theme injection
import style from "./theme";

const AppWrapper = () => {
    return (
        <div
            style={{
                ...style.theme.additionals.flexCenterDisplay,
                backgroundColor: style.theme.colors.lightGray,
                width: "100vw",
                height: "100vh",
                fontFamily: style.theme.typography.fontFamily,
            }}
        >
            <ContentBox />
            <div role={"footer"} className="attribution">
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                    Frontend Mentor
                </a>
                .<br />
                Coded by <a href="https://www.frontendmentor.io/profile/AnnoDomine">Dominic Seel (aka AnnoDomine)</a>.
            </div>
        </div>
    );
};

export default AppWrapper;
