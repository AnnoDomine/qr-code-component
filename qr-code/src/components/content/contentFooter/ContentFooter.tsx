import { contentFooterText } from "../utils/texts/contentFooterText";
import { contentFooterStyle } from "./ContentFooter.styles";

const ContentFooter = () => {
    return (
        <div role={"contentinfo"}>
            <p style={contentFooterStyle("topic")}>{contentFooterText.topic}</p>
            <p style={contentFooterStyle("description")}>{contentFooterText.description}</p>
        </div>
    );
};

export default ContentFooter;
