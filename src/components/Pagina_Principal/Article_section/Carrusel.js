//import { useState } from "react";
import { Carousel } from "react-bootstrap"

export const Carrusel = ({ name, description, image, longitud = '100%', tall = '100%', margin = ['-8px', '40px'] }) => {

    const [n1, n2, n3, n4] = name,
        [desc] = description,
        [d1, d2, d3, d4] = desc;
    const [i1, i2, i3, i4] = image

    return (
        <Carousel style={{ width: longitud, height: tall, marginTop: margin[0], paddingBottom: "15px" }}>
            <Carousel.Item style={{ width: longitud }}>
                <img style={{ width: longitud, margin: "auto", borderRadius: "5px", }}
                    className="d-block"
                    src={i1}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>{n1}</h3>
                    <p>{d1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: longitud }}>
                <img style={{ width: longitud, margin: "auto", borderRadius: "5px", }}
                    className="d-block"
                    src={i2}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>{n2}</h3>
                    <p>{d2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: longitud }}>
                <img style={{ width: longitud, margin: "auto", borderRadius: "5px", }}
                    className="d-block"
                    src={i3}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>{n3}</h3>
                    <p>{d3}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: longitud }}>
                <img style={{ width: longitud, margin: "auto", borderRadius: "5px" }}
                    className="d-block"
                    src={i4}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>{n4}</h3>
                    <p>{d4}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
