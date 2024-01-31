import Card from '../card/card';

import './cardList.scss';

function CardList({data}) {
    return (
        <div class="emojiList">
            <div class="container emojiListContainer">
                {data.map((card)=>{
                    // Избавление от повторяющихся ключевых слов
                   
                    return <Card
                        symbol={card.symbol}
                        title={card.title}
                        keywords={card.keywords}
                    />
                })}
            </div>
        </div>
    );
}

export default CardList;