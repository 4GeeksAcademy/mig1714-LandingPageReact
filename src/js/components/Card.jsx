const card = (props) => {

    return (




        <div className="card text-center  h-100" >
            <img src={props.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text ">
                    {props.descripcion}
                </p>





            </div>


            <div className="card-footer bg-transparent ">

                <a href="#" className="btn btn-primary m-3 ">
                    Go somewhere
                </a>


            </div>

        </div>













    )



}

export default card;