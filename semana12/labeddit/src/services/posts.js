import axios from "axios"
// import { goToFeed, goToPost } from "../router/cordinator"


const BASE_URL ="https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

export const createPost = (body, resetForm, getData) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("CREATE POST",response)
        getData()
        resetForm()
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu post não foi criado")
    })
}

export const createComments = (body, postId, resetForm,getData) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/posts/${postId}/comment`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("CREATE COMMENT",response)
        getData()
        resetForm()
    }).catch(error => {
        console.log(error.message)
        alert("ops, seu comentário não foi criado")
    })
}