import { useState } from "react"

export default () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    
    return <p>Currently active question</p>
}