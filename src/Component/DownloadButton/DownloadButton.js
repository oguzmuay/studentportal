import {Button} from "reactstrap";


const DownloadButton =  (props) => {
        const downloadFile = () => {
            let links = props.links;
            for (let i = 0; i < links.length; i++) {
                window.location.href = links[i];
            }
        }
        return (
            <Button onClick={downloadFile}>
                {props.text}
            </Button>
        )
}

export default DownloadButton;