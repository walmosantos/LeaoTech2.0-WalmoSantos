import React from "react"
import ProdutosObj from '../../data/produtos'

const ListarProdutos = () => {
    console.log(ProdutosObj)
    return (
        <>
        
            <div>
                <img style={''} src={ProdutosObj[0].image} alt="" />
                <div className="card-body"></div>
                <h5 className="card-title">{ProdutosObj[0].image}</h5>
                <p className="card-text">{ProdutosObj[0].image}</p>
                <p>Preço: {ProdutosObj[0].image}</p>
                <a href="#" className="btn btn-primary"> Quero este</a>
            </div>
        </>
    )
}