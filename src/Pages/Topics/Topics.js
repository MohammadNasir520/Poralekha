import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Topics.css"
const Topics = () => {

    const topics = [
        {
            id: 1,
            topic: "Noun",
            logo: "https://merriam-webster.com/assets/mw/images/article/art-global-footer-recirc/wooden%20block%20letters%20spelling%20the%20word%20noun-9521-d4a45330934a83f090913237650e52a7@1x.jpg",
        },
        {
            id: 2,
            topic: "Pronoun",
            logo: "https://thumbs.dreamstime.com/b/pronoun-word-concept-cubes-pronoun-word-concept-cubes-171767587.jpg",
        },
        {
            id: 3,
            topic: "Adjective",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSks7nkfQPaunH_ZAJJveBnRhhnuaTLDcXJJA&usqp=CAU",
        },
        {
            id: 4,
            topic: "Verb",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1diQUtJMf-q64TZsREg_QDfY0jg7ZHk-sw&usqp=CAU",
        },
    ]


    const [loading, setLoading] = useState(false)



    return (
        <div

            className=' text-white topics-container ' style={{ minHeight: "70vh", }}
        >
            {
                topics.map((topic, index) =>
                    <div
                        key={index}
                        className='bg-sky-500  text-xl font-bold flex justify-center'
                        style={{ height: "240px", width: "", borderRadius: "10px" }}

                    >
                        <div>
                            <h2>{topic.topic}</h2>


                            <img style={{ height: "150px" }} className='flex justify-center' src={topic.logo}>

                            </img>

                            <br />
                            <Link to={`/quiz/${topic.id} `} state={{ topic }}>
                                <button
                                    onClick={() => setLoading(true)}
                                    className='bg-blue-500 '>
                                    {
                                        loading ? "Loading..." : "Start Quiz"
                                    }
                                </button>
                            </Link>

                        </div>
                    </div>)
            }
        </div>
    );
};

export default Topics;