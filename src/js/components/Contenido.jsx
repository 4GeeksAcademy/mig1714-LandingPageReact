import { useEffect, useState } from "react";
import Card from "./Card"

const contenido = () => {

    const [personajes, setPersonajes] = useState([]);

    const traerPersonajes = async () => {

        try {

            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();

            setPersonajes(data.results);
            console.log(data.results);

            


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {




        traerPersonajes();




    }, [])

    return (


        <div className="container">
            <div className="row mb-4">

                <div className=" col-12" style={{ minHeight: "300px" }}>

                    <div className="border bg-secondary-subtle rounded p-3" style={{ minHeight: "300px" }}>

                        <p className="m-3" style={{ fontSize: "60px" }}>A Warm Welcome!</p>
                        <p className="m-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur architecto fugiat. Nobis explicabo voluptates, nam alias obcaecati corrupti perferendis odit, soluta id, ab quam omnis aut qui dolor debitis.
                        </p>

                        <button className="btn btn-primary m-3" type="submit">Call to action!</button>


                    </div>



                </div>





            </div>


            <div className="row g-4 mb-5 ">

                {
                    personajes.map((personaje) => {


                        return (


                            <div className="col-12 col-md-3 " key={personaje.id}>

                                <Card

                                    titulo={personaje.name}
                                    imagen={personaje.image}
                                    descripcion ={`Este personaje es un ${personaje.species} genero ${personaje.gender} y es de ${personaje.origin.name}`}



                                />


                            </div>




                        )


                    })
                }

                


            </div>





        </div>






    )
}

export default contenido;