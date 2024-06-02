import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const TablaMes = () => {
  /*   const [data, setdata] = useState([])
  
      useEffect(() => {
          try {
              fetch("")
                  .then(response => response.json())
                  .then((data) => setdata(data))
                  .catch(error => console.error('Error'))
              console.log(data.Adultos)
          } catch (error) {
  
          }
  
  
      }, [data]) */

  return (
    <>
      <div className="container text-info">
        <h2 className="mt-3">Plan de trabajos...</h2>
        <hr></hr>
        <div className="d-flex gap-3 justify-content-start"></div>
      </div>
    </>
  );
};
