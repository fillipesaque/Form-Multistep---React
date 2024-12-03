import React from "react";
import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta Pouco ...</h2>
      <p>
        A sua opniao e muito importante , em breve voce recebera um cupom de
        desconto.
      </p>
      <p>Para concluir a sua avaliaçao clique no botao enviar abaixo</p>
      <h3>Aqui esta o resumo da sua avaliaçao {data.name}</h3>
      <p className="review-data">
        <span>Satisfaçao com o produto</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentario</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
