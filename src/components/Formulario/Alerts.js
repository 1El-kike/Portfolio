import { Alert } from "react-bootstrap";

export const Alerts = ({ heading, textbody, texthead }) => {
    return (
        <>
            <Alert variant="success">
                <Alert.Heading>{heading}</Alert.Heading>
                <p>{texthead}</p>
                <hr />
                <p className="mb-0">
                    {textbody}
                </p>

            </Alert>
        </>
    )
}
