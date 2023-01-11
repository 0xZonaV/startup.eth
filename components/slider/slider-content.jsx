import {Button} from "semantic-ui-react";
import Slider from "react-animated-slider";

const SliderComponent = ({AllProps}) => {

    const content = () => {
        const generatedContent = [];

        for (let index = 0; index < 3; index++) {
            const {Name, Desc, Image, CAddress} = AllProps[index];

            generatedContent.push(
                <div
                    key={CAddress}
                    className="slider-content"
                    style={{marginTop: "30px", background: `url("${Image}") center center`, borderRadius: "1.5%"}}
                >
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5 )"}} className="inner">
                        <h1>{Name}</h1>
                        <p style={{fontSize: "30px"}}>{Desc}</p>
                        <Button style={{marginBottom: "10px"}}
                                inverted
                                color="violet"
                                size="massive" primary
                                href={`/projects/${CAddress}`}>View More</Button>
                    </div>
                </div>
            )
        }

        return generatedContent;
    }


    return(
        <Slider className="slider-wrapper">
            {content()}
        </Slider>
    )
}

export default SliderComponent;