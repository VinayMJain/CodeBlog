import React, { useState } from 'react';
import styles from './Faqs.module.css';


function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { id: 1, question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
        { id: 2, question: "Why do we use it?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
        { id: 3, question: "Where does it come from?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
        { id: 4, question: "How do I start blogging?", answer: "Sign up, click \"Create New Post\" on your dashboard, and hit publish when done." },
        { id: 5, question: "Can I share posts on social media?", answer: "Yes, you can share your posts on various social media platforms." },
        { id: 6, question: "What programming languages can I use?", answer: "You can use a wide range of programming languages depending on your project requirements." },
        { id: 7, question: "What programming languages can I use?", answer: "You can use a wide range of programming languages depending on your project requirements." },
        { id: 8, question: "How do I contact support?", answer: "You can contact our support team through email or by filling out the contact form on our website." }
    ];

    console.log("Faqs.jsx rendered");

    return (
        <>
            <h1 id="FaqsH1" >Frequently Asked Questions</h1>
            <div 
                className={styles.containerFluid}
                id="ContainerFluidId"
            >
                {faqs.map((faq,index) => (
                    <div 
                        className={styles.faqSection} 
                        id={`FaqSectionid${faq.id}`}
                        key={faq.id}
                    >
                        <div 
                            className={`${styles.accordion} ${activeIndex === index ? styles.active : ''}`} 
                            id="accordianId"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div 
                                className={styles.icon}
                                id="iconId"
                            ></div>
                            <h5 id="QuestionID">{faq.question}</h5>
                        </div>
                        <div 
                            className={styles.panel} 
                            id="panelId"
                            style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                        >
                            <p id="answerPara">{faq.answer}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </>
    );
}

export default Faqs;
