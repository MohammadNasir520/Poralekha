

export const addQuestion = async (questions) => {
    const res = await fetch("http://localhost:5000/questions", {
        method: "PUT",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(questions)
    })
    const data = await res.json();
    return data;
}
export const postVocabulary = async (questions) => {
    const res = await fetch("http://localhost:5000/vocabularies", {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(questions)
    })
    const data = await res.json()
    return data;
}