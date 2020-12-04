import axios from "axios"

const BASE_URL ="https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

export const votePost = (body, postId, getData) => {
    const token = localStorage.getItem("token")
    
    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("votouuuuuuu",response)
        getData()
        
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu voto não foi computado")
    })
}


export const voteComments = (body, postId, commentId, getData) => {
    const token = localStorage.getItem("token")
    
    axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("votouuuuuuu CCCC",response)
        getData()
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu voto não foi computado")
    })
}