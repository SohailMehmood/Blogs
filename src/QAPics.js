import { useParams } from "react-router-dom";

function QAPics(props) {
    const { id } = useParams();
    var pic;
    if (Number(id) === 1) {
        pic = "/src/pic1.png";
    }
    else if (Number(id) === 2)
    pic = "/src/pic2.png"

    return (<div>
        <h3>This is picture number: {id}</h3>
        {pic && <img src={pic} alt="pic"/>}
    </div>)
};

export default QAPics;