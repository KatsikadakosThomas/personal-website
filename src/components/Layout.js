"use client"
import Nav from "@/components/Nav"
import { Fragment,useState } from "react"
import Modal from "./Modal"

export default function Layout({children}){
    const [open, setOpen] = useState(false);

    const openModal = () => {
        console.log("fired")
      setOpen(!open);
    };


    return(
    <Fragment>
<Nav openModal={openModal} opened={open}></Nav>
<Modal openModal={openModal} opened={open}></Modal>
{children}
</Fragment>
    )
}