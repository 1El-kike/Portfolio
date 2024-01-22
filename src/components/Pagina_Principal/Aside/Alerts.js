import { Alert } from "react-bootstrap";

export const Alerts = () => {
    return (
        <>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>La imagen se llama fondo.jpg y suponemos que se encuentra en el mismo directorio que la
                    página. En este caso se colocaría la siguiente etiqueta </p>
                <hr />
                <p className="mb-0">
                    El color de los enlaces visitandos. La "v" viene justamente de la palabra visitado. Es el color
                    que tendrán los enlaces que ya hemos visitado.
                </p>

            </Alert>
        </>
    )
}
