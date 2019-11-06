import major from "../../views/major"
import perform from "../../views/major/perform"
import choreographer from "../../views/major/choreographer"
import broadcasting from "../../views/major/broadcasting"

export default {
    path:"/major",
    component:major,
    children:[
        {
            path:"perform",
            component:perform
        },
        {
            path:"choreographer",
            component:choreographer
        },
        {
            path:"broadcasting",
            component:broadcasting
        }
    ]
}
