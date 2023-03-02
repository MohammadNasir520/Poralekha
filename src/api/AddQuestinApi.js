

export const addQuestion = async (questions) => {
    const res = await fetch("https://poralekha-server.vercel.app/questions", {
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
    const res = await fetch("https://poralekha-server.vercel.app/vocabularies", {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(questions)
    })
    const data = await res.json()
    return data;
}