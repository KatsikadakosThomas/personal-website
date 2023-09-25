import Nav from "@/components/Nav"
import { Fragment } from "react"

export default function Layout({children}){

    return(
    <Fragment>
<Nav></Nav>
{children}
</Fragment>
    )
}